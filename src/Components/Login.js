import React from "react";
import "../Login.css";
import Gif from "./Resources/Chalk_Shapian.gif";

const Login = () => {
  return (
    <>
      <div className="bg">
        <div className="gif">
          <div id="gif">
            <img src={Gif} alt="" id="Gif" />
          </div>
          <div className="loginPage">
            <div className="loginToAccount">Login To Your Account</div>
            <br />
            <br />
            <div className="emailLogin">EMAIL</div>
            <input id="emailLogin" placeholder="Email" />
            <div className="passwordLogin">PASSWORD</div>
            <input id="passwordLogin" placeholder=" Password" />
            <div className="remember">
              <input type="checkbox" name="" id="check" />&nbsp;
              <div className="rememberMe">Remember me</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
