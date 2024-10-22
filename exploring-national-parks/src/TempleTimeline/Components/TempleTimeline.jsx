import React, { useEffect } from 'react';

const TwitterTimeline = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);
    script.style = {maxWidth: '500px', margin: '0 auto'}
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <a 
        className="twitter-timeline"
        href="https://twitter.com/TempleUniv"
      >
      </a>
    </>
  );
};

export default TwitterTimeline;
