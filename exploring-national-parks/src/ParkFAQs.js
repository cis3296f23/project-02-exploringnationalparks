/**
 * Renders the ParkSearch component page.
 * @component
 * @module ParkFAQs
 * @returns {JSX.Element} The rendered ParkSearch component.
 */
import React from 'react';
// import ActivitiesList from './ParkSearch/Components/ActivitiesList.jsx';
import FAQ from './ParkFAQs/Components/faq';
// import ParkSearchWelcome from './ParkSearch/Components/ParkSearchWelcome.jsx';
import './Style/parkSearch.css';
function ParkFAQs(){
    return(
    <div className='park-faq' >
        {/* <ParkSearchWelcome /> */}
        {/* <ActivitiesList /> */}
        <FAQ />
    </div>
    );
}

export default ParkFAQs;