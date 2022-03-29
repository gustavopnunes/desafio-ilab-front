import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";

function Login() {
  return (
    <div className="loginPage-container">
      <Header>EntregaLover</Header>
      <div className="login-container">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
