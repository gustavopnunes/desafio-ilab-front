import "./style.css";
import logoutImg from "./assets/logout-512.png";
import helmet from "./assets/capacete.png";
import { useAuth } from "../../providers/AuthContext";


function Header() {

    const { logout } = useAuth();

    return (
        <div className="header__container">
            <img src={helmet} className="helmet_img"></img>
            <img src={logoutImg} className="logout_img" onClick={() => logout()}></img>
        </div>
    );
}

export default Header;