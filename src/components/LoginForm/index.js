import React from "react";
import { Container } from "./styles";

function LoginForm() {
  return (
    <Container>
      <header>
        <h1>ENTRAR COM E-EMAIL OU TELEFONE</h1>
      </header>
      <input type="email" placeholder="Informe o seu e-mail ou telefone" />
      <input type="password" placeholder="Informe sua senha" />
      <button>Continuar</button>
    </Container>
  );
}

export default LoginForm;
