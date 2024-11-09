/**
 * Renders a navigation bar component with links to different pages.
 * @module Navbar
 * @memberof GlobalComponents
 * 
 * @returns {JSX.Element} The rendered navigation bar component.
 */
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Style/navbar.css'
import tree from './tree.png'
const Navbar = () => {
    return (
        <nav className="nav-bar">
            <ul>
                <li className = "header">
                    <NavLink to="/">Exploring National Parks</NavLink>
                </li>
                <li className = "logo">
                    <img src = {tree} alt = "tree"/>
                </li>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/ParkSearch">Park Search</NavLink>
                </li>
                <li>
                    <NavLink to="/ParkInfo" reloadDocument>Park Info</NavLink>
                </li>
                <li>
                    <NavLink to="/ParkPlan">Park Planner</NavLink>
                </li>
                <li>
                    <NavLink to="/ParkAI">Park AI</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar