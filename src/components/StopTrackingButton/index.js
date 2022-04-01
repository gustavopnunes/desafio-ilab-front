import React from "react";
import { NavLink } from "react-router-dom";
import useRequests from "../../hooks/useRequests";
import useTracking from "../../hooks/useTracking";
import "./styles.css";

function StopTrackingButton({ newStatus, buttonText }) {
  const { watchID, trackingID } = useTracking();
  const { put } = useRequests();

  const updateTrackingStatus = async () => {
    const body = {
      "status": newStatus
    };

    await put('tracking-status', body, String(trackingID)).then(res => {
      if (res != null) {
        console.log("PUT: ", res);
      } else {
        console.log("DR | trID: ", trackingID);
      };
    });

    window.location.replace("/orders");
  };

  const stopWatch = () => {
    navigator.geolocation.clearWatch(watchID);
  };

  const stopTrackingRecord = () => {
    console.log("tID: ", String(trackingID));
    stopWatch();
    updateTrackingStatus();
  };

  return (
    <NavLink name="finish-tracking" to="/orders">
      <button
        className={buttonText === "Cancelar" ? "canceled-theme stopBtn" : "delivered-theme  stopBtn"}
        onClick={stopTrackingRecord}
      >
        {buttonText}
      </button>
    </NavLink>
  );
}

export default StopTrackingButton;
