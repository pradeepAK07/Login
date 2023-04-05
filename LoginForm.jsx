import { useState } from "react";
import "./LoginForm.css";

function LoginForm(){
    const [popupStyle,showpopup] = useState("hide");
    const popup =()=>{
        showpopup("login-popup");
        setTimeout(()=>showpopup("hide"),3000)
    }
    return (
        <div className="cover">
            <h1>Login Form</h1>
            <input type="text" placeholder="username"></input>
            <input type="password" placeholder="password"></input>

            <div className="login-btn" onClick={popup}>Login </div>

            <p className="text">or login using</p>
            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
            </div>

        </div>
    )
}

export default LoginForm;