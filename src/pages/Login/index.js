import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";

function Login() {
  return (
    <div className="loginPage-container">
      <Header isLoginPage>EntregaLovers App</Header>
      <div className="login-container">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;