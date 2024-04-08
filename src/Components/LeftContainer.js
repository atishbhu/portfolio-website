import React from "react";
import "./style.css";
import atishAvtaart from "../images/atish-avatar.jpg";

const LeftContainer = () => {
  return (
    <div className="left-container">
      <div className="nav-container">
        <div>
          <img src={atishAvtaart} alt="atish-avtaar" className="avtaar-img" />
        </div>
        <div className="nav-list">
          <div className="nav-item">About</div>
          <div className="nav-item">Projects</div>
          <div className="nav-item">Skills</div>
          <div className="nav-item">Contact</div>
          <div className="nav-item">Resume</div>
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;
