import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import defaultImage from '../../../src/parkImg-default.png';

/**
 * Renders a gallery of highlighted parks.
 * @module RecentArticles
 * @memberof HomePage
 * @returns {JSX.Element} The HighlightGallery component.
 */
const RecentArticles = () => {
  const [highlightedParks, setHighlightedParks] = useState([]);

  useEffect(() => {
    async function fetchParks() {
      try {
        const url = `https://developer.nps.gov/api/v1/newsreleases?limit=471&start=0&api_key=UBMbMBwA6jEjk8FLXcwwnf6leh9RfRRhoaM67qkQ`;
        //const url = 'https://developer.nps.gov/api/v1/parks?api_key=Y7kFnm6SP5SMQhkTvwUSgyjge9buj4DbjrkuV2S0&limit=471'
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Unable to fetch parks');
        }
        const data = await response.json();
        const randomParks = getRandomParks(data.data, 20);

        setHighlightedParks(randomParks);
        console.log(randomParks);
      } catch (error) {
        console.log('Error Fetching parks: ', error.message);
      }
    }

    fetchParks();
  }, []);

  const getRandomParks = (returnedParks, numParks) => {
    const parks = returnedParks.sort(() => 0.5 - Math.random()).slice(0, numParks);
    return parks;
  };

  // Slider settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="gallery">
      <h1 className="header">See what's new!</h1>
      <Slider {...sliderSettings} className="slider">
        {highlightedParks.map((park) => (
          <div key={park.id} className="slide">
            <h3>{park.title}</h3>
            <Link to = {`${park.url}`}><button className="more-info">Read More</button></Link>
          </div>
        ))}
      </Slider>
      </div>
  );
};

export default RecentArticles;
