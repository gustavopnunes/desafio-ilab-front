import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import { Button } from "./styles";
import useRequests from "../../hooks/useRequests";
import useTracking from "../../hooks/useTracking";

function StopTrackingButton(props) {
  const { watchID, trackingID } = useTracking();
  const { put } = useRequests();
  // const trID = String(trackingID);

  const token = localStorage.getItem("@iLab/token");

  async function updateTrackingStatus() {
    const body = {
      "status": props.newStatus
    }

    const response = await put('tracking-status', body, String(trackingID)).then(res => {
      if (res != null){
        console.log("PUT: ", res);
      } else {
        console.log("deu ruim | trID: ", trackingID);
      }
    });
  };

  function stopWatch(){
    navigator.geolocation.clearWatch(watchID);
  };

  return (
    <NavLink name="/finish-tracking" to="/orders">
        <Button
            onClick={() => {
                console.log("tID: ", String(trackingID));
                stopWatch();
                updateTrackingStatus();
            }}
        >
            {props.buttonText}
        </Button>

    </NavLink>
  );
}

export default StopTrackingButton;
