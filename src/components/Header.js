import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-section">
                <img src={LOGO_URL} />
            </div>
            <div className="nav-section">
                <ul className="navlist">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About Us</li>
                    <li className="nav-item">Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;