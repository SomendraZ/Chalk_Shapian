import React from 'react'
import "../SignUp.css";
import Gif from "./Resources/Chalk_Shapian.gif";

const SignUp = () => {
  return (
    <>
      <div className="bg">
        <div className="gif">
          <div id="gif">
            <img src={Gif} alt="" id="Gif" />
          </div>
          <div className="signUpPage">
            <div className="signUpToAccount">Create an Account</div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
