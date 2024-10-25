import React, { useEffect } from 'react';
import './Style/templetwitter.css';

function TempleTwitter() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.charSet = "utf-8";

        /*script.onload = () => {
            if (window.twttr) {
                window.twttr.widgets.load();
            }
        };*/

        document.body.appendChild(script);
    }, []);

    return (
        <div className="twitter-container">
            <h2 className="twitter-title">Latest Temple University News</h2>
            <a
                className="twitter-timeline"
                href="https://twitter.com/templeuniv"
                data-tweet-limit="1"
                data-height="200"
                data-width="500"
                data-chrome="noheader nofooter noborders"
            >
                Tweets by TempleUniv
            </a>
        </div>
    );
}

export default TempleTwitter;
