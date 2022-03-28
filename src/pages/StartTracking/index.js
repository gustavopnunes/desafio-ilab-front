import React from "react";
import Header from "../../components/Header";
import StartTrackingButton from "../../components/StartTrackingButton";
import useTracking from "../../hooks/useTracking";

function StartTracking() {
  const { orderID } = useTracking();

  return (
    <div className="start-container">
      <Header>Pedido #{orderID}</Header>
      <div className="page-container">
        <StartTrackingButton />
      </div>
    </div>
  );
}

export default StartTracking;
