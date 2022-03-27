import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import { Button } from "./styles";
import useRequests from "../../hooks/useRequests";
import useTracking from "../../hooks/useTracking";

function StopTrackingButton(props) {
  const { watchID, trackingID } = useTracking();
  const { permission } = useTracking();
  const { put } = useRequests();

  const token = localStorage.getItem("@iLab/token");

  async function updateTrackingStatus() {
    const body = {
        "status": props.newStatus
    }

    const response = await put(`tracking-status/${trackingID}`, body, token).then(res => {
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
                console.log("wID: ", watchID);
                console.log("tID: ", String(trackingID));
                console.log("perm: ", permission);
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
