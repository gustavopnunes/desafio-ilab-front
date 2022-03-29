import jwtDecode from "jwt-decode";
import React from "react";
import { NavLink } from 'react-router-dom';
import useRequests from "../../hooks/useRequests";
import useTracking from "../../hooks/useTracking";
import "./styles.css";

function StartTrackingButton() {
  const { setTrackingID, setWatchID, orderID } = useTracking();
  const { setPermission } = useTracking();
  const { post } = useRequests();
  let trackID = "";

  const token = localStorage.getItem("@iLab/token");

  const createTrackingStatus = async () => {
    const body = {
      order: { "id": orderID },
      dpId: { "id": jwtDecode(token).userId },
      status: "DELIVERED"
    };

    await post("tracking-status", body, token).then(res => {
      if (res) {
        trackID = String(res.id);
        setTrackingID(res.id);
        console.log("post TS: ", res);
      };
    });
  };

  const createTrackingRecord = async (body) => {
    await post("tracking-history", body, token).then(res => {
      if (res)
        console.log("post TH: ", res);
    });
  };

  const getLocationUpdate = () => {

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
        };
        createTrackingRecord(body);
      });

      setWatchID(wID);

    } else {
      setPermission(false);
      console.log("Not Available");
      // alerta?
    };
  };

  const startTracking = () => {
    createTrackingStatus();
    getLocationUpdate();
  };

  return (
    <NavLink name="start-tracking" to="/finish-tracking">
      <button
        className="startBtn"
        onClick={startTracking}
      >
        Iniciar Tracking
      </button>
    </NavLink>
  );
}

export default StartTrackingButton;
