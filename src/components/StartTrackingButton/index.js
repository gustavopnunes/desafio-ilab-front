import React, { useState } from "react";
import { NavLink, useLocation } from 'react-router-dom';

import "./styles.css";
import useRequests from "../../hooks/useRequests";
import useTracking from "../../hooks/useTracking";

function StartTrackingButton() {
  const { setTrackingID, setWatchID } = useTracking();
  const { setPermission } = useTracking();
  const { post } = useRequests();
  let trackID = "";


const location = useLocation()
  const token = localStorage.getItem("@iLab/token");

  async function createTrackingStatus() {
    const body1 = {
      order: { "id": 2020202 },
      dpId: { "id": 123123 },
      status: "DELIVERED"
    };

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
      {console.log(location)}
      <button
        className="startBtn"
        onClick={() => {
          createTrackingStatus();
          getLocationUpdate();
        }}
      >
        Iniciar Tracking
      </button>
    </NavLink>
  );
}

export default StartTrackingButton;
