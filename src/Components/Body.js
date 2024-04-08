import React from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import './style.css'

const Body = () => {
  return (
    <div className="body-container">
      <LeftContainer />
      <RightContainer />
    </div>
  );
};

export default Body;
