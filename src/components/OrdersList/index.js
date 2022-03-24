import './style.css';
import { orders } from "../../mock/orders";
import OrderItem from "../OrderItem";
import Header from "../Header";

console.log("pedidos: ", orders);

function OrdersList() {
  return (
    <div className='ordersList__container'>
      <Header>
          Pedidos abertos
      </Header>
      <ul>
        {orders.map((order) => (
          <li className='ordersList__li' key={order.id}>
            <OrderItem>
              {order.id}
            </OrderItem>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrdersList;
