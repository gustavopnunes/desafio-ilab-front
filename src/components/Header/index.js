import { useAuth } from "../../contexts/AuthContext";
import helmet from "./assets/capacete.png";
import logoutImg from "./assets/logout.png";
import "./style.css";

function Header({ children, isLoginPage=false }) {

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
                    style={isLoginPage? {opacity: 0} : {opacity:1
                    }}
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
