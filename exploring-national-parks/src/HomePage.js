/**
 * Renders the home page of the application.
 * @component
 * @module HomePage
 * @returns {JSX.Element} The rendered home page component.
 */
import React, { useEffect, useState } from 'react';
import Welcome from './HomePage/Components/Welcome'
import Buttons from './HomePage/Components/Buttons'
import yosemite from './HomePage/Assets/yosemite.jpg';
import './Style/homepage.css'
import HighlightGallery from './HomePage/Components/HighlightGallery';
import axios from 'axios';

const HomePage = () => {

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = '057e459b323be812a262c65a65f78048';
      const lat = 39.952583; // Latitude for Philadelphia
      const lon = -75.165222; // Longitude for Philadelphia
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

      try {
        const response = await axios.get(url);
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
      <div className="home-page main-component">
        <h2>Welcome to the National Parks Explorer</h2>
        {weather ? (
          <div id="weather-container">
            <h3>Current Weather</h3>
            <p>{`${weather.name}: ${weather.main.temp}°F, ${weather.weather[0].description}`}</p>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
        <Welcome />
        <HighlightGallery />
        <Buttons />
      </div>
    );
  };

export default HomePage;