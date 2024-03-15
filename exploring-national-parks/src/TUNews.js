import React from 'react';
import './Style/tuNews.css';

const Twitter = () => (
    <a href="https://twitter.com/TempleUniv?ref_src=twsrc%5Etfw"
      className="twitter-timeline"
      data-tweet-limit="1"
      data-height="700"
      data-width="700"
    >
        tweet from TempleUniv
    </a>
  );

function TUNews(){
    return(
        <div className='tuNews-parent'>
            {Twitter()} 
        </div>
    );
}
export default TUNews;