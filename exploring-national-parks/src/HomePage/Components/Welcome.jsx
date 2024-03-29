import React, { useState, useEffect } from 'react';

/**
 * Component representing the welcome section of the homepage.
 * @module Welcome
 * @memberof HomePage
 * @returns {JSX.Element} The rendered welcome section.
 */
const Welcome = () => {

    const [city, setCity] = useState('Philadelphia'); // Set default city to Philadelphia
    const [weatherData, setWeatherData] = useState(null);
    const [hourlyForecastData, setHourlyForecastData] = useState([]);

    const apiKey = '70abfa1ceb836554a778c4106cbfa466'; // Replace 'YOUR_API_KEY_HERE' with your actual OpenWeatherMap API key

    const getWeather = () => {
        if (!city) {
            alert('Please enter a city');
            return;
        }

        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

        fetch(currentWeatherUrl)
            .then(response => response.json())
            .then(data => {
                setWeatherData(data);
            })
            .catch(error => {
                console.error('Error fetching current weather data:', error);
                alert('Error fetching current weather data. Please try again.');
            });

        fetch(forecastUrl)
            .then(response => response.json())
            .then(data => {
                setHourlyForecastData(data.list.slice(0, 5)); // Limit to next 5 hours
            })
            .catch(error => {
                console.error('Error fetching hourly forecast data:', error);
                alert('Error fetching hourly forecast data. Please try again.');
            });
    };

    useEffect(() => {
        // Fetch weather data when component mounts
        getWeather();
    }, []); // Empty dependency array to run only once after initial render

    const convertToCelsius = temp => {
        return Math.round(temp - 273.15);
    };

    const convertToFahrenheit = temp => {
        return Math.round((temp - 273.15) * 9/5 + 32);
    };

    const convertToLocalTime = timestamp => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleString('en-US', { timeZone: 'America/New_York' });
    };

    return (
        <div className="welcome">
            <h1 className="welcome-title">Explore National Parks</h1>
            <p className="welcome-text">
                Welcome to Exploring National Parks! This web app is designed to help you find the perfect national park
                for your next trip.
                Click on the "Park Search" button to search for a park by activity, or click on the "Plan A Trip" button
                to plan a trip to a park you've already selected.
            </p>
            <a class="twitter-timeline" data-lang="en" data-height="300"  href="https://twitter.com/TempleUniv?ref_src=twsrc%5Etfw">Tweets by TempleUniv</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

            <div id="weather-container">
                <h2>Weather App</h2>
                <input type="text" id="city" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
                {weatherData && (
                    <>
                        <img id="weather-icon" src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="Weather Icon" />
                        <div id="temp-div">{convertToCelsius(weatherData.main.temp)}°C / {convertToFahrenheit(weatherData.main.temp)}°F</div>
                        <div id="weather-info">{weatherData.weather[0].description}</div>
                    </>
                )}

                {hourlyForecastData.length > 0 && (
                    <div id="hourly-forecast">
                        <h4>Next 5 Hours Forecast:</h4>
                        {hourlyForecastData.map((item, index) => (
                            <div key={index} className="hourly-item">
                                <span>{convertToLocalTime(item.dt)}</span>
                                <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="Hourly Weather Icon" />
                                <span>{convertToCelsius(item.main.temp)}°C / {convertToFahrenheit(item.main.temp)}°F</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Welcome;
