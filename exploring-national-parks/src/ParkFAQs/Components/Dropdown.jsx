import React, { useState } from 'react';

const Dropdown = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div style={{ marginBottom: '15px' }}>
      <div
        onClick={toggleDropdown}
        style={{
          cursor: 'pointer',
          padding: '10px',
          border: '1px solid #000000',
          borderRadius: '5px',
        //   backgroundColor: '#9bb8a0',
            backgroundColor: '#A09bb8',
        }}
      >
        {question}
      </div>
      {isOpen && (
        <div
          style={{
            padding: '10px',
            marginTop: '5px',
            border: '1px solid #000000',
            borderRadius: '5px',
            backgroundColor: '#9badb8',
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
