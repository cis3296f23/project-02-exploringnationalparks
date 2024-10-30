import React, { useState, useEffect } from 'react';
import { Activities } from '../Functionality/Activities'; // Importing the functionality
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import '../../Style/activitiesList.css';
import { Link } from 'react-router-dom';
import { FetchParks } from '../Functionality/FetchParks';
import { StateOptions } from '../Functionality/StateOptions';

/**
 * Component for the body of the park search page.
 * Includes dropdowns for a user to select desired activities
 * and states, a search button to confirm their choices, two buttons
 * to go to park planning or return to home, and the populated selected
 * parks based on the users requests
 *
 * @component
 * @module ActivitiesList
 * @memberof ParkSearch
 * @returns {JSX.Element} Park search body component
 */
function ActivitiesList() {

    const [posts, setPosts] = useState([]);
    const [selectedState, setSelectedState] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const json = await Activities();
                setPosts(json.data);
            } catch (error) {
                setError('Failed to fetch activities. Please try again.');
            }
        };

        fetchData();
    }, []);

    const activities = posts?.map((post) => { return { value: post.id, label: post.name } });
    const animatedComponents = makeAnimated();
    const [selectedOption, setSelectedOption] = useState([]);

    const [parksFiltered, setParksFiltered] = useState(null);
    const [showParksFiltered, setShowParksFiltered] = useState(null);
    const [page, setPage] = useState(1);
    var numOfParks = 0;

    const sendToAPI = async () => {
        setPage(1);
        setIsLoading(true);
        try {
            const filtered = await FetchParks(selectedOption, selectedState);
            setParksFiltered(filtered.data ? filtered.data : filtered);
            setShowParksFiltered((filtered.data || filtered).slice(0, 3));
        } catch {
            setError('Error searching for parks. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    if (typeof parksFiltered?.length !== 'undefined') {
        numOfParks = parksFiltered?.length;
    }

    const previousPage = () => {
        const nowPage = page - 1;
        setPage(nowPage);
        setShowParksFiltered(parksFiltered.slice((nowPage - 1) * 3, nowPage * 3));
    };

    const nextPage = () => {
        const nowPage = page + 1;
        setPage(nowPage);
        setShowParksFiltered(parksFiltered.slice((nowPage - 1) * 3, nowPage * 3));
    };

    return (
        <div className='activities-list'>
            <div className="activity-dropdown">
                <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    className="basic-multi-select"
                    classNamePrefix="select"
                    options={activities}
                    onChange={choice => setSelectedOption(choice)}
                    placeholder="Activities"
                />
                <Select
                    closeMenuOnSelect={true}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    options={StateOptions}
                    isMulti
                    onChange={choice => setSelectedState(choice)}
                    placeholder="States"
                />
                <button className="activity-search-button" onClick={sendToAPI}>Search</button>
            </div>
            <br/>
            <br/>
            <div className="search-button-wrapper">
                <div className="search-button-grid">
                    <Link className="search-button" to="/"><button className="search-button">Return To Home</button></Link>
                    <Link className="search-button" to="/plan-trip"><button className="search-button">Plan A Trip</button></Link>
                </div>
            </div>
            <div className="return-parks">
                <div className="parks-number">
                    {isLoading ? 'Loading Parks...' : error ? <span style={{ color: 'red' }}>{error}</span> : `Showing ${numOfParks} parks`}
                </div>
                <div className="parks">
                    {showParksFiltered?.map((park) => (
                        <div key={park.id} className="post-card">
                            <div>
                                <div className="learn-more-dropdown">
                                    <div>
                                        <p className="learn-more-name">{park.fullName}</p>
                                        <p>{park.states}</p>
                                    </div>
                                    <div className="learn-more-option">
                                        <a href={'ParkInfo?parkCode='+park.parkCode}><button className="learn-more-button">Learn More</button></a>
                                    </div>
                                </div>
                                <img src={park.images.length !== 0 ? park.images[0].url : ''} alt=''/>
                            </div>
                            <p className="description">{park.description}</p>
                        </div>
                    ))}
                </div>
                {parksFiltered?.length > 3 && (
                    <div className="btn-list">
                        <button disabled={page === 1} className="activity-button" onClick={previousPage}>Previous Page</button>
                        <button disabled={page * 3 >= parksFiltered.length} className="activity-button" onClick={nextPage}>Next Page</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ActivitiesList;
