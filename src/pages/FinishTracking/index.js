import React from 'react';
import Header from '../../components/Header';
import StartTrackingButton from '../../components/StartTrackingButton';
import StopTrackingButton from "../../components/StopTrackingButton";

function FinishTracking() {
  return (

    <div className="start-container">
      <Header />
      <div className="page-container">
        {/* <div> */}
          <StopTrackingButton buttonText={"Concluir"} newStatus={"DELIVERED"} />
          <StopTrackingButton buttonText={"Cancelar"} newStatus={"CANCELED"} />
        {/* </div> */}
      </div>
    </div>

  );
}

export default FinishTracking;