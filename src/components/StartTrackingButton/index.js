import React from "react";

import { Button } from "./styles";
import useRequests from "../../hooks/useRequests";

function StartTrackingButton() {

  const { put, post } = useRequests();

  const token = localStorage.getItem("@iLab/token");
  const body = {
    order: { "id": 5 },
    dpId: { "id": 2 },
    status: "DELIVERED"
  }

  async function createTrackingStatus() {
    console.log(token);
    const response = await post("tracking-status", body, token).then(res => {
      if (res)
        console.log(res);
    });
  }

  return (
    <Button
      onClick={() => createTrackingStatus()}
    >
      Iniciar Tracking
    </Button>

  );
}

export default StartTrackingButton;
