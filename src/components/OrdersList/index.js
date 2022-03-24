import './style.css';
import { orders } from "../../mock/orders";
import OrderItem from "../OrderItem";

console.log("pedidos: ", orders);

function OrdersList() {
  return (
    <div className='ordersList__container'>
      <div className='orderList__top'>
        <h1 className='orderList__h1'>
          Pedidos abertos
        </h1>
      </div>
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
