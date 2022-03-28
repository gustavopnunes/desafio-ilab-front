import React from "react";

import "./styles.css";
import useRequests from "../../hooks/useRequests";
import useTracking from "../../hooks/useTracking";

function StopTrackingButton({ newStatus, buttonText}) {
  const { watchID, trackingID } = useTracking();
  const { put } = useRequests();
  // const trID = String(trackingID);

  async function updateTrackingStatus() {
    const body = {
      "status": newStatus
    }

    await put('tracking-status', body, String(trackingID)).then(res => {
      if (res != null){
        console.log("PUT: ", res);
      } else {
        console.log("deu ruim | trID: ", trackingID);
      }
    });

    window.location.replace("/orders")
  };

  function stopWatch(){
    navigator.geolocation.clearWatch(watchID);
  };

  return (
    // <NavLink name="/finish-tracking" to="/orders">
        <button
          className={buttonText === "Cancelar" ? "canceled-theme stopBtn" : "delivered-theme  stopBtn"}
          onClick={() => {
              console.log("tID: ", String(trackingID));
              stopWatch();
              updateTrackingStatus();
          }}
        >
          {buttonText}
        </button>

    // </NavLink>
  );
}

export default StopTrackingButton;
