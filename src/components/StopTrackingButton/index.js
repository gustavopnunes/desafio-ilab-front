import React from "react";
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
        console.log("deu ruim | trID: ", trackingID);
      };
    });

    window.location.replace("/orders");
  };

  const stopWatch = () => {
    navigator.geolocation.clearWatch(watchID);
  };

  const stopTracking = () => {
    console.log("tID: ", String(trackingID));
    stopWatch();
    updateTrackingStatus();
  };

  return (
    <button
      className={buttonText === "Cancelar" ? "canceled-theme stopBtn" : "delivered-theme  stopBtn"}
      onClick={stopTracking}
    >
      {buttonText}
    </button>
  );
};

export default StopTrackingButton;
