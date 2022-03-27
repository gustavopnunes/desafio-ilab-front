import React from 'react';
import StopTrackingButton from "../../components/StopTrackingButton";

import { Container } from './styles';

function FinishTracking() {
  return (
    <Container>
      <StopTrackingButton buttonText={"Concluir"} newStatus={"DELIVERED"} />
      <StopTrackingButton buttonText={"Cancelar"} newStatus={"CANCELED"} />
    </Container>
  );
}

export default FinishTracking;