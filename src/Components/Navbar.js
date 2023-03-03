import React, { useState } from "react";
import Chalk from "../Resources/chalk_shapian.PNG";
import Profile from "../Resources/profile.png";
import "../CSS/Navbar.css";

const Navbar = () => {
  const [style1, setStyle1] = useState("cont1");
  const [style2, setStyle2] = useState("cont2");
  const changeStyle1 = () => {
    setStyle1("cont1");
    setStyle2("cont2");
  };
  const changeStyle2 = () => {
    setStyle1("cont2");
    setStyle2("cont1");
  };
  return (
    <>
      <div className="navbar">
        <img id="chalk" src={Chalk} alt="" />
        <div className="bar">
          <div className="disfor">
            <div id="discover" className={style1} onClick={changeStyle1}>
              Discover
            </div>
            <div id="forum" className={style2} onClick={changeStyle2}>
              Forum
            </div>
          </div>
          <div id="profile">
            Hi,<u>SomendraZ</u> &nbsp;&nbsp;
            <img class="profile" src={Profile} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
