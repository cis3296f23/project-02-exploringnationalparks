/**
 * Renders the home page of the application.
 * @component
 * @module HomePage
 * @returns {JSX.Element} The rendered home page component.
 */
import React from 'react'
import Welcome from './HomePage/Components/Welcome'
import Buttons from './HomePage/Components/Buttons'
import yosemite from './HomePage/Assets/yosemite.jpg';
import './Style/homepage.css'
import HighlightGallery from './HomePage/Components/HighlightGallery';
import RecentArticles from './HomePage/Components/RecentArticles';

const HomePage = () => {
  return (
    // <Navbar/>
    <div className = "home-page main-component">
        <Welcome/>
        <HighlightGallery/>
        <Buttons/>
        <RecentArticles/>
    </div>
  )
}

export default HomePage