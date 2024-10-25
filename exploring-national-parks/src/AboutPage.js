/**
 * Renders the home page of the application.
 * @component
 * @module HomePage
 * @returns {JSX.Element} The rendered home page component.
 */

import React from 'react'
import './Style/AboutPage.css'

const AboutPage = () => {
    return (
        <div className = "about-container">
            <div className = "about-page-header">
                <h1>About</h1>
            </div>
            <div className = "about-information">
            <p>
                Welcome to the Exploring National Parks!  This website was created to help both new and seasoned park-goers plan and discover National Parks that they may be interested in visiting.
                The park search feature found in the above nav bar allows you to select activities that you are interested in, coupled with different 
                states for you to select.  
                The trip planner feature allows you to select a national park that you would like to visit along with different activities and see events planned for the days you chose.  
            </p>
            </div>

        </div>
    );
}

export default AboutPage
