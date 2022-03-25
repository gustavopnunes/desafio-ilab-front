import { Container } from "./styles";
import { orders } from "../../mock/orders";
import { useAuth } from "../../providers/AuthContext";

function OrdersList() {

  const {logout} = useAuth();

  return (
    <Container>
      paginazinha das ordenzinhas e pa
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.id}<button>mim dexa entrega esse!!!</button></li>
        ))}

        <button onClick={() => logout()}>Sair</button>
      </ul>
    </Container>
  );
}

export default OrdersList;
