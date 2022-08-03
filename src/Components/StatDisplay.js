import React from "react";
import brandLogo from "./Images/icon-brand-recognition.svg";
import detailedLogo from "./Images/icon-detailed-records.svg";
import customizeLogo from "./Images/icon-fully-customizable.svg";

const StatDisplay = () => {
  return (
    <div className="stats">
      <h2 style={{textAlign:"center"}}>Advanced Statistics</h2>
      <p style={{textAlign:"center"}}>
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </p>
      <div className="features-container">
        <div>
          <div className="logo-container">
            <img src={brandLogo} alt="brand" />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div>
          <div className="logo-container">
            <img src={detailedLogo} alt="detailed" />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div>
          <div className="logo-container">
            <img src={customizeLogo} alt="customize" />
          </div>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatDisplay;
