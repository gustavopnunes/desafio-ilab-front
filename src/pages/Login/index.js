import LoginForm from "../../components/LoginForm";

import { Container } from "./styles";

function Login() {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
}

export default Login;

// tá logado? >> renderiza tela de pedidos
// não tá logado? >> renderiza tela de login
