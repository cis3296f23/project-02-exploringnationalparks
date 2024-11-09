/**
 * Renders the ParkSearch component page.
 * @component
 * @module ParkSearch
 * @returns {JSX.Element} The rendered ParkSearch component.
 */
import React from 'react';
import ParkAIHome from './ParkAI/Components/ParkAIHome.jsx';
import './Style/parkSearch.css';
function ParkSearch(){
    return(
    <div className='park-ai' >
        <ParkAIHome />
        
    </div>
    );
}

export default ParkSearch;