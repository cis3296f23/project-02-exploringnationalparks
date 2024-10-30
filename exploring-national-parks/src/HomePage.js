/**
 * Renders the home page of the application.
 * @component
 * @module HomePage
 * @returns {JSX.Element} The rendered home page component.
 */

import React, { useState } from 'react';
import Welcome from './HomePage/Components/Welcome';
import Buttons from './HomePage/Components/Buttons';
import yosemite from './HomePage/Assets/yosemite.jpg';
import './Style/homepage.css';
import HighlightGallery from './HomePage/Components/HighlightGallery';
import axios from 'axios';

const HomePage = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeatherData = async (city) => {
    const apiKey = '3d9d73f5ccd9292a91e017bc148257e7';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeather({
        city: response.data.name,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeather(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      getWeatherData(city);
    }
  };

  return (
    <div className="home-page main-component">
      <Welcome />
      <HighlightGallery />
      <Buttons />

      <div className="weather-section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
          />
          <button type="submit">Get Weather</button>
        </form>

        {weather && (
          <div>
            <h2>Weather in {weather.city}</h2>
            <p>Temperature: {weather.temperature}°C</p>
            <p>Condition: {weather.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;

