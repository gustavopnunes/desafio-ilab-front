import React from 'react';
import { Container } from './styles';

function LoginForm() {
  return (
    <Container>
      <header>
        <h1>ENTRAR COM E-EMAIL</h1>
      </header>
      <label>Informe o seu e-email para continuar</label>
        <input placeholder='Informe o seu e-mail' />
        <button>Continuar</button>
    </Container>
  )
}

export default LoginForm;