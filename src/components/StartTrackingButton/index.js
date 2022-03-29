import React from "react";
import { NavLink, useLocation } from 'react-router-dom';

import "./styles.css";
import useRequests from "../../hooks/useRequests";
import useTracking from "../../hooks/useTracking";
import jwtDecode from "jwt-decode";

function StartTrackingButton() {
  const { setTrackingID, setWatchID } = useTracking();
  const { setPermission } = useTracking();
  const { post } = useRequests();
  let trackID = "";


const location = useLocation()
  const token = localStorage.getItem("@iLab/token");

  async function createTrackingStatus() {
    const body1 = {
      order: { "id": location.state.id },
      dpId: { "id": jwtDecode(token).userId },
      status: "DELIVERED"
    };

    await post("tracking-status", body1, token).then(res => {
      if (res)
      trackID = String(res.id);
      setTrackingID(res.id);
      console.log("post TS: ", res);
    });
  }

  async function createTrackingRecord(body) {
 
    await post("tracking-history", body, token).then(res => {
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
    }
  }

  return (
    <NavLink name="start-tracking" to="/finish-tracking">
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
