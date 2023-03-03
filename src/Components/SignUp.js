import React from "react";
import "../CSS/SignUp.css";
import Gif from "../Resources/Chalk_Shapian.gif";

const SignUp = () => {
  return (
    <>
      <div className="bg">
        <div className="gif">
          <div id="gif">
            <img src={Gif} alt="" id="Gif" />
          </div>
          <div className="SignUpPage">
            <div className="SignUpToAccount">Create Account</div>
            <div className="flexRow">
              <div className="chalkNameSignUp">CHALK NAME</div>
              <div className="red">*</div>
            </div>
            <input id="chalkNameSignUp" placeholder="Chalk Name" />
            <div className="flexRow">
              <div className="nameSignUp">NAME</div>
              <div className="red">*</div>
            </div>
            <input id="nameSignUp" placeholder="Name" />
            <div className="flexRow">
              <div className="emailSignUp">EMAIL</div>
              <div className="red">*</div>
            </div>
            <input id="emailSignUp" placeholder="Email" />
            <div className="flexRow">
              <div className="passwordSignUp">PASSWORD</div>
              <div className="red">*</div>
            </div>
            <input id="passwordSignUp" placeholder=" Password" />
            <div className="flexRow">
              <div className="confirmPasswordSignUp">CONFIRM PASSWORD</div>
              <div className="red">*</div>
            </div>
            <input id="confirmPasswordSignUp" placeholder="Confirm Password" />
            <div className="SignUpBtn">SignUp</div>
            <div className="or">
              <div className="hLine" />
              OR
              <div className="hLine" />
            </div>
            <div className="alreadyAccount">
              <div className="already">Already have a account ?</div>
              <div className="login">Login</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
