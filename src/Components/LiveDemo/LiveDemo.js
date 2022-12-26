import React from "react";
import "./LiveDemo.css"
const LiveDemo = () => {
  return (
    <div className="live-demo-container">
      <div className="live-demo">
            <p className="next-car">Your next car</p>
            <p className="best-car">Your best car</p>
            <p>As automakers have slimmed down to become more profitable and efficient, we have seen storied names, such as Mercury, Oldsmobile, and Pontiac, fade into the history books. We have seen others, such as Chrysler, Jaguar, and Volvo, find new corporate parents, outside their original country.</p>
            <button className="demo-btn">Live demo</button>
      </div>
      <div className="demo-image-container">
        <img src="images/car3.jpeg" alt="" />
      </div>
    </div>
  );
};

export default LiveDemo;
