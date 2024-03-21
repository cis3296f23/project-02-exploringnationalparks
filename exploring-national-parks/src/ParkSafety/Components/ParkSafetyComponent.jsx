import React from "react";
import "../../Style/ParkSafety.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";
const parkSafety = [
  {
    img: "./marked_trail.jpeg",
    heading: "Stay on Marked Trails",
    content:
      "Stick to designated paths and trails to avoid getting lost or wandering into hazardous areas.",
  },
  {
    img: "./wildlife_distance.jpeg",
    heading: "Observe Wildlife from a Distance",
    content:
      " Enjoy wildlife from afar and refrain from feeding or approaching animals, as this can be dangerous for both you and the animals.",
  },
  {
    img: "./prepared.jpeg",
    heading: "Be Prepared",
    content:
      "Bring essentials such as water, snacks, a map, sunscreen, insect repellent, and appropriate clothing for the weather conditions.",
  },
  {
    img: "./hydrated.jpeg",
    heading: "Stay Hydrated and Energized",
    content:
      "Drink plenty of water and take breaks when needed to avoid dehydration and fatigue.",
  },
  {
    img: "./rules.jpeg",
    heading: "Respect Park Rules and Regulations",
    content:
      "Follow all posted rules and regulations, including those regarding camping, fires, and waste disposal.",
  },
  {
    img: "./trash.jpeg",
    heading: "Pack Out Your Trash",
    content:
      "Leave no trace by carrying out all trash and disposing of it properly.",
  },
];

function ParkSafetyComponent() {
  return (
    <div className="parentSafety">
      <div className="safetyHeading">
        <h1>Explore Safely</h1>
        <h4>Your Guide to Park Adventure and Protection!</h4>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="TempleUniv"
          options={{ height: 200 }}
        />
      </div>
      <div className="safetyGrid">
        {parkSafety.map((item, index) => {
          return (
            <div className="safety-card" key={index}>
              <div>
                <h4 className="learn-more-name">{item.heading}</h4>
              </div>
              <div
                className="cardImage"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>

              <p className="description">{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ParkSafetyComponent;
