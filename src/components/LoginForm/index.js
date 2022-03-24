import React, {useState } from "react";
import { Container } from "./styles";
import {useAuth} from "../../providers/AuthContext"

function LoginForm() {
  const {validateLogin} = useAuth();
  const [loginData, setLoginData] = useState({
    "login": "",
    "password": ""
  })

  return (
    <Container>
      <header>
        <h1>ENTRAR COM E-EMAIL OU TELEFONE</h1>
      </header>
      <input type="email" onChange = {e => setLoginData({...loginData, login: e.target.value})} placeholder="Informe seu e-mail ou telefone" />
      <input type="password" onChange = {e => setLoginData({...loginData, password: e.target.value})} placeholder="Informe sua senha" />
      <button onClick={() => validateLogin(loginData)} >Continuar</button>
    </Container>
  );
}

export default LoginForm;
