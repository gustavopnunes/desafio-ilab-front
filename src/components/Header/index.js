import { useAuth } from "../../providers/AuthContext";
import helmet from "./assets/capacete.png";
import logoutImg from "./assets/logout-512.png";
import "./style.css";


function Header({ children }) {

    const { logout } = useAuth();

    return (
        <div className={children !== "EntregaLover" ? "header__container" : "header__container login_header"}>
            <img
                src={helmet}
                className="helmet_img"
                alt="capacete"
            />
            <span className="header_span">
                {children}
            </span>
            {children !== "EntregaLover" && (
                <img
                    src={logoutImg}
                    className="logout_img"
                    alt="botao sair"
                    onClick={logout}
                />
            )}
        </div>
    );
}

export default Header;
