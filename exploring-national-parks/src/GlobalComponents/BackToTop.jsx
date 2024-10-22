import React, { useState, useEffect } from 'react';

const BackToTop = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {(
        <button onClick={scrollToTop} style={styles.button}>
          Back to Top
        </button>
      )}
    </div>
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '50px',
    right: '30px',
    backgroundColor: '#13a15d',
    color: '#fff',
    border: 'none',
    borderRadius: '15px',
    padding: '15px 30px',
    cursor: 'pointer',
    zIndex: 1000,
  },
};

export default BackToTop;
