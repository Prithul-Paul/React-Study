import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    // console.log("Header Rendered");
    
    const [loginBtnTxt, setLoginBtnTxt] = useState(false);

    useEffect(()=>{
        // console.log("useEffect called");
    }, [loginBtnTxt])
    return (
        <div className="header">
            <div className="logo-section">
                <img src={LOGO_URL} />
            </div>
            <div className="nav-section">
                <ul className="navlist">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/about">About</Link></li>
                    <li className="nav-item"><Link to="/contact">Contact</Link></li>
                    <li className="nav-item">Cart</li>
                    <li className=""><button onClick={()=>{
                        setLoginBtnTxt(!loginBtnTxt);
                    }} className="login-btn">{ loginBtnTxt ? "Logout" : "Login" } </button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;