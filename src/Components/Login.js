import React from "react";
import { Link, useNavigate} from "react-router-dom";
import "../CSS/Login.css";
import Gif from "../Resources/Chalk_Shapian.gif";

const Login = () => {
  const navigate = useNavigate();
  const login = () => {
    localStorage.setItem('LoggedIn',true);
    navigate("/Discover");
  }
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
            <div className="loginBtn" onClick={login} >Login</div>
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
              <Link className="signUp" to="/SignUp">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
