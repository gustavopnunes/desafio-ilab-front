import React, { useState } from "react";

import { Button } from "./styles";
import useRequests from "../../hooks/useRequests";

function StartTrackingButton() {
  const { put, post } = useRequests();
  const [trackingId, setTrackingId] = useState("");
  const [permission, setPermission] = useState(false);
  let id;
  let watchID;
  const token = localStorage.getItem("@iLab/token");
  const body1 = {
    order: { "id": 5 },
    dpId: { "id": 2 },
    status: "DELIVERED"
  }

  async function createTrackingStatus() {
    console.log(token);
    const response = await post("tracking-status", body1, token).then(res => {
      if (res)
      console.log("TS: ", String(res.id));
      setTrackingId(String(res.id));
      id = String(res.id);
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
        const body = {
          "thDate": position.timestamp,
          "thLatitude": position.coords.latitude,
          "thLongitude": position.coords.longitude,
          "tsId": {
            "id": id
          }
        }
        createTrackingRecord(body);
      });

      watchID = navigator.geolocation.watchPosition((position) => {
        const body = {
          "thDate": position.timestamp, 
          "thLatitude": position.coords.latitude, 
          "thLongitude": position.coords.longitude, 
          "tsId": {
            "id": id
          }
        }
        createTrackingRecord(body);
      });
    } else {
      setPermission(false);
      console.log("Not Available");
      // alerta?
    }
  }

  return (
    <Button
      onClick={() => {
        createTrackingStatus();
        getLocationUpdate();
      }}
    >
      Iniciar Tracking
    </Button>

  );
}

export default StartTrackingButton;
