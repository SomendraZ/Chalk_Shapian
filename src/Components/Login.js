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
            <div className="emailLogin">EMAIL</div>
            <input id="emailLogin" placeholder="Email" />
            <div className="passwordLogin">PASSWORD</div>
            <input id="passwordLogin" placeholder=" Password" />
            <div className="remember">
              <input type="checkbox" id="check" />
              &nbsp;Remember me
            </div>
            <div className="loginBtn">Login</div>
            <div className="or">
              <div className="hLine" />
              OR
              <div className="hLine" />
            </div>
            <div className="google">
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt=""
                id="google"
              />
              Login with Google
            </div>
            <div className="noAccount">
              <div className="dont">Don’t have a account ?</div>
              <div className="signUp">Sign Up</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
