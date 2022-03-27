import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import { Button } from "./styles";
import useRequests from "../../hooks/useRequests";
import useTracking from "../../hooks/useTracking";

function StartTrackingButton() {
  const { setTrackingID, setWatchID } = useTracking();
  const { setPermission } = useTracking();
  const { post } = useRequests();
  let trackID = "";

  const token = localStorage.getItem("@iLab/token");

  const body1 = {
    order: { "id": 24 },
    dpId: { "id": 3 },
    status: "DELIVERED"
  }

  async function createTrackingStatus() {
    console.log(token);
    const response = await post("tracking-status", body1, token).then(res => {
      if (res)
      trackID = String(res.id);
      setTrackingID(res.id);
      console.log("post TS: ", res);
    });
  }

  async function createTrackingRecord(body) {
    const response = await post("tracking-history", body, token).then(res => {
      if (res)
        console.log("post TH: ", res);
    });
  }

  function getLocationUpdate() {

    if ("geolocation" in navigator) {

      setPermission(true);
      
      navigator.geolocation.getCurrentPosition((position) => {
        let body = {
          "thDate": position.timestamp,
          "thLatitude": position.coords.latitude,
          "thLongitude": position.coords.longitude,
          "tsId": {
            "id": trackID
          }
        }
        createTrackingRecord(body);
      });

      const wID = navigator.geolocation.watchPosition((position) => {
        let body = {
          "thDate": position.timestamp, 
          "thLatitude": position.coords.latitude, 
          "thLongitude": position.coords.longitude, 
          "tsId": {
            "id": trackID
          }
        }
        createTrackingRecord(body);
      });

      setWatchID(wID);

    } else {
      setPermission(false);
      console.log("Not Available");
      // alerta?
    }
  }

  return (
    <NavLink name="start-tracking" to="/finish-tracking">
      <Button
        onClick={() => {
          createTrackingStatus();
          getLocationUpdate();
        }}
      >
        Iniciar Tracking
      </Button>
    </NavLink>
  );
}

export default StartTrackingButton;
