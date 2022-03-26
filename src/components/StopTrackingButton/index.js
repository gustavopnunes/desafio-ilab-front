import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import { Button } from "./styles";
import useRequests from "../../hooks/useRequests";
import useTracking from "../../hooks/useTracking";

function StopTrackingButton({newStatus, buttonText}) {
  let { trackingID, watchID } = useTracking();
  const { put } = useRequests();

  const token = localStorage.getItem("@iLab/token");

  async function updateTrackingStatus() {
    const body = {
        "id": trackingID,
        "status": newStatus
    }

    const response = await put("tracking-status", body, token).then(res => {
      if (res)
      console.log("res: ", res);
    });
  };

  function stopWatch(){
    navigator.geolocation.clearWatch(watchID);
  };

  return (
    <NavLink name="/finish-tracking" to="/orders">
        <Button
            onClick={() => {
                stopWatch();
                updateTrackingStatus();
            }}
        >
            {buttonText}
        </Button>
        
    </NavLink>
  );
}

export default StopTrackingButton;
