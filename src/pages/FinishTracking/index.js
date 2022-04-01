import React from 'react';
import Header from '../../components/Header';
import StopTrackingButton from "../../components/StopTrackingButton";
import useTracking from "../../hooks/useTracking";

function FinishTracking() {

  const { orderID } = useTracking();

  return (
    <div className="start-container">
      <Header>Pedido #{orderID}</Header>
      <h2>Sua rota está sendo rastreada!</h2>
      <div className="page-container">
          <StopTrackingButton buttonText={"Concluir"} newStatus={"DELIVERED"} />
          <StopTrackingButton buttonText={"Cancelar"} newStatus={"CANCELED"} />
      </div>
    </div>
  );
};

export default FinishTracking;