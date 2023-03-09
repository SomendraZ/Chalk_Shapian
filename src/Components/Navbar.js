import React, { useState } from "react";
import { Link } from "react-router-dom";
import Chalk from "../Resources/chalk_shapian.PNG";
import Profile from "../Resources/profile.png";
import "../CSS/Navbar.css";

const Navbar = () => {
  const [StyleDiscover, setStyleDiscover] = useState("contDiscover");
  const [StyleForum, setStyleForum] = useState("contForum");
  const changeStyleDiscover = () => {
    setStyleDiscover("contDiscover");
    setStyleForum("contForum");
  };
  const changeStyleForum = () => {
    setStyleDiscover("contForum"); 
    setStyleForum("contDiscover");
  };
  return (
    <>
      <div className="navbar">
        <img id="chalk" src={Chalk} alt="" />
        <div className="bar">
          <div className="disfor">
            <Link id="discover" className={StyleDiscover} onClick={changeStyleDiscover} to="/" >
              Discover
            </Link>
            <div id="forum" className={StyleForum} onClick={changeStyleForum}>
              Forum
            </div>
          </div>
          <div id="profile">
            Hi,<u>Chalk Shapian</u> &nbsp;&nbsp;
            <img className="profile" src={Profile} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
