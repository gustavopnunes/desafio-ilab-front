import "./style.css";
import logoutImg from "./assets/logout-512.png";
import helmet from "./assets/capacete.png";
import { useAuth } from "../../providers/AuthContext";


function Header({ children }) {

    const { logout } = useAuth();

    return (
        <div className={children !== "EntregaLover" ? "header__container" : "header__container login_header"}>
            <img src={helmet} className="helmet_img" alt="capacete"></img>
            <span className="header_span">{children}</span>
            {children !== "EntregaLover" && (
                <img src={logoutImg} className="logout_img" alt="botao sair" onClick={() => logout()}></img>

            )}
        </div>
    );
}

export default Header;
