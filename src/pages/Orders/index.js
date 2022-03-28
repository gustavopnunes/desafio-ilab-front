import Header from '../../components/Header';
import OrdersList from '../../components/OrdersList';

function Orders() {
  return (
    <div className="start-container">
      <Header>Pedidos abertos</Header>
      <div className="page-container">
        <OrdersList />
      </div>
    </div>
  );
}

export default Orders;
