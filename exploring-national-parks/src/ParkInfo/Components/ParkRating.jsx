/**
 * ParkRating is component for the ParkInfo component.
 * It allows users to rate a park from 1 to 5 stars.
 * @module ParkRating
 * @memberof ParkInfo
 * @returns {JSX.Element} The rendered ParkRating component.
 */
// ParkRating.jsx
import React, { useState, useEffect } from 'react';

const ParkRating = ({ initialRating, onChange }) => {
    const [rating, setRating] = useState(initialRating);

    const handleClick = (value) => {
        setRating(value);
        onChange(value);
    };

    return (
        <div>
            {[1, 2, 3, 4, 5].map((value) => (
                <span
                    key={value}
                    style={{ cursor: 'pointer', color: value <= rating ? 'gold' : 'gray' }}
                    onClick={() => handleClick(value)}
                >
          ★
        </span>
            ))}
        </div>
    );
};

export default ParkRating;