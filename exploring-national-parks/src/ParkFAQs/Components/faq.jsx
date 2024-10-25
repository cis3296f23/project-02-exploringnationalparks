import React from 'react'
import Dropdown from './Dropdown'

/**
 * Component representing the welcome section of the homepage.
 * @module FAQ
 * @memberof ParkFAQs
 * @returns {JSX.Element} The rendered welcome section.
 */
const FAQ = () => {
    return (
        <div className = "FAQ">
            <h1 className = "FAQs">National Park Service FAQs</h1>
            <p className = "FAQs">
               <Dropdown
                    question="Who is the director of the National Park Service?"
                    answer="Charles F. 'Chuck' Sams III is the director of the National Park Service."
                />
                <Dropdown
                    question="What government agency oversees the National Park Service?"
                    answer="The National Park Service is a bureau of the Department of the Interior. Directly overseeing its operation is the department's Assistant Secretary for Fish, Wildlife and Parks."
                />
                <Dropdown
                    question="How many employees are in the National Park Service?"
                    answer="Approximately 20,000 full time employees, and over 279,000 volunteers"
                />
                <Dropdown
                    question="How old is the National Park System?"
                    answer="The National Park Service was created by an act signed by President Woodrow Wilson on August 25, 1916. Yellowstone National Park was established by an act signed by President Ulysses S. Grant on March 1, 1872, as the nation's first national park."
                />
                <Dropdown
                    question="How many people visit the national parks?"
                    answer="In 2022, the total number of recreation visits to the national parks was 311,985,998."
                />
            </p>
            <div>

            </div>
        </div>
    )
}

export default FAQ