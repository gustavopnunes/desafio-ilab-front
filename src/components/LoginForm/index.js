import React, { useState } from "react";
import { Form } from "./styles";
import { useAuth } from "../../providers/AuthContext";

function LoginForm() {
  const { validateLogin } = useAuth();
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  return (
    <Form onSubmit={e => e.preventDefault()}>
      <header>
        <h1>ENTRAR COM E-MAIL OU TELEFONE</h1>
      </header>

        <input
          type="email"
          onChange={(e) =>
            setLoginData({ ...loginData, login: e.target.value })
          }
          placeholder="Informe seu e-mail ou telefone"
        />
        <input
          type="password"
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          placeholder="Informe sua senha"
        />
        <button onClick={() => validateLogin(loginData)}>Continuar</button>
    </Form>
  );
}

export default LoginForm;
