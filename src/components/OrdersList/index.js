import { Container } from "./styles";
import { orders } from "../../mock/orders";

console.log(orders);

function OrdersList() {
  return (
    <Container>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.id}</li>
        ))}
      </ul>
    </Container>
  );
}

export default OrdersList;
