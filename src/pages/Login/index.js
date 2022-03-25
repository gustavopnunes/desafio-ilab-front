import LoginForm from "../../components/LoginForm";
import { useAuth } from "../../providers/AuthContext";
import Orders from "../Orders";

import { Container } from "./styles";

function Login() {
  
const {isAuthenticated} = useAuth();

  if (isAuthenticated){
    window.location.replace("/orders")
  }

  return (
    <Container>
      {!isAuthenticated? 
      <Login />
    :
      <Orders />
}
    </Container>
  );
}

export default Login;

// tá logado? >> renderiza tela de pedidos
// não tá logado? >> renderiza tela de login
