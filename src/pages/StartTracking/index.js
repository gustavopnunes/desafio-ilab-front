import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header";
import StartTrackingButton from "../../components/StartTrackingButton";
import useTracking from "../../hooks/useTracking";

import "./styles.css";

function StartTracking() {

  const { orderID } = useTracking();

  return (
    <div className="start-container">
      <Header>Pedido #{orderID}</Header>
      <div className="page-container">
        <StartTrackingButton />
        <NavLink name="start-tracking" to="/orders">
          <button className="start_button">
            Voltar
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default StartTracking;
