import React from 'react';
import ParkInfoComponent from './ParkInfo/Components/ParkInfoComponent.jsx';
import './Style/ParkSafety.css';
/**
 * Renders the ParkSafety component page.....
 * 
 * @component
 * @module ParkSafety
 * 
 * @returns {JSX.Element} The rendered ParkInfo component.
 */
function ParkSafety(){
    return(
        <div className="park-info-parent">
            <ParkInfoComponent />
        </div>
    );
}

export default ParkInfo;
