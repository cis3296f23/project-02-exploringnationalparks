import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = () => {
    return (
        <div className="homepage-button-wrapper">
            <div className="button-container">
                <p>Discover New Recipes</p> 
                <Link to="/ParkAI">
                    <button className="homepage-button">Get Recipes</button>
                </Link>                    
            </div> 
            <div className="button-container">
                <p>Plan Your Weekly Meals</p>
                <Link to="/WeeklyMealPlan">
                    <button className="homepage-button">Weekly Meal Plan</button>
                </Link>
            </div>               
        </div>
    );
};

export default Buttons;
