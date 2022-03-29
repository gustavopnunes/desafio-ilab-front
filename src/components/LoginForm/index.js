import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Form } from "./styles";

function LoginForm() {
  const { validateLogin } = useAuth();
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  const validateOnClick = () => {
    validateLogin(loginData);
  };

  return (
    <Form onSubmit={e => e.preventDefault()} autoComplete="on">
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
        onChange={e =>
          setLoginData({ ...loginData, password: e.target.value })
        }
        placeholder="Informe sua senha"
      />
      <button onClick={validateOnClick}>Continuar</button>
    </Form>
  );
}

export default LoginForm;
