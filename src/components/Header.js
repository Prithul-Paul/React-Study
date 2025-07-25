import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    console.log("Header Rendered");
    
    const [loginBtnTxt, setLoginBtnTxt] = useState(false);

    useEffect(()=>{
        console.log("useEffect called");
    }, [loginBtnTxt])
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
                    <li className=""><button onClick={()=>{
                        setLoginBtnTxt(!loginBtnTxt);
                    }} className="login-btn">{ loginBtnTxt ? "Logout" : "Login" } </button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;