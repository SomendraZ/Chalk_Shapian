import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Login.css";
import Gif from "../Resources/Chalk_Shapian.gif";
let google =
  "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png";

const Login = () => {
  const navigate = useNavigate();

  const login = async () => {
    const email = document.getElementById("emailLogin").value;
    const password = document.getElementById("passwordLogin").value;
    const rememberMe = document.getElementById("check").checked;
  
    try {
      const response = await fetch("http://localhost:6969/api/user/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.status === 200) {
        localStorage.setItem("LoggedIn", true);
        if (rememberMe) {
          localStorage.setItem("Email", email);
          localStorage.setItem("Password", password); // add this line
        } else {
          localStorage.removeItem("Email");
          localStorage.removeItem("Password"); // add this line
        }
        navigate("/Discover");
      } else if (response.status === 401) {
        throw new Error("Invalid email or password. Please try again.");
      } else {
        throw new Error("Unexpected error. Please try again later.");
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
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
            <input id="emailLogin" placeholder="Email" type="email" />
            <div className="passwordLogin">PASSWORD</div>
            <input id="passwordLogin" placeholder="Password" type="password" />
            <div className="remember">
              <input type="checkbox" id="check" />
              &nbsp;Remember me
            </div>
            <div className="loginBtn" onClick={login}>
              Login
            </div>
            <div className="or">
              <div className="hLine" />
              OR
              <div className="hLine" />
            </div>
            <div className="google">
              <img src={google} alt="" id="google" />
              Login with Google
            </div>
            <div className="noAccount">
              <div className="dont">Don’t have an account?</div>
              <Link className="signUp" to="/SignUp">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;