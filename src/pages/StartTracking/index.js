import React from "react";
import Header from "../../components/Header";
import StartTrackingButton from "../../components/StartTrackingButton";

import "./styles.css";

function StartTracking() {
  return (
    <div className="start-container">
      <Header />
      <div className="page-container">
        <StartTrackingButton />
      </div>
    </div>
  );
}

export default StartTracking;
