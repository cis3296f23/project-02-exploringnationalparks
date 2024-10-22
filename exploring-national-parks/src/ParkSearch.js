/**
 * Renders the ParkSearch component page.
 * @component
 * @module ParkSearch
 * @returns {JSX.Element} The rendered ParkSearch component.
 */
import React from 'react';
import ActivitiesList from './ParkSearch/Components/ActivitiesList.jsx';
import ParkSearchWelcome from './ParkSearch/Components/ParkSearchWelcome.jsx';
import './Style/parkSearch.css';
import BackToTop from './GlobalComponents/BackToTop';
function ParkSearch(){
    return(
    <div className='park-search' >
        <ParkSearchWelcome />
        <ActivitiesList />
        <BackToTop />
    </div>
    );
}

export default ParkSearch;