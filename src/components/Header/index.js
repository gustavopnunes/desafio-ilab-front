import "./style.css";
import logoutImg from "./assets/logout.png";
import helmet from "./assets/capacete.png";
import { useAuth } from "../../contexts/AuthContext";

function Header({ children }) {
  const { logout } = useAuth();

  return (
    <div className="header__container">
      <img src={helmet} className="helmet_img" alt="capacete"></img>
      <span className="header_span">{children}</span>
      <img
        src={logoutImg}
        className="logout_img"
        alt="botao sair"
        onClick={() => logout()}
      ></img>
    </div>
  );
}

export default Header;
