import React from 'react';
import OrdersList from '../../components/OrdersList';
import useRequests from '../../hooks/useRequests';

function Orders() {
  const requests = useRequests();

  return <OrdersList />;
}

export default Orders;
