import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Chalk from "../Resources/chalk_shapian.PNG";
import Profile from "../Resources/profile.png";
import "../CSS/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [StyleDiscover, setStyleDiscover] = useState("contDiscover");
  const [StyleForum, setStyleForum] = useState("contForum");
  const [open, setOpen] = React.useState(false);
  const changeStyleDiscover = () => {
    setStyleDiscover("contDiscover");
    setStyleForum("contForum");
  };
  const changeStyleForum = () => {
    setStyleDiscover("contForum");
    setStyleForum("contDiscover");
  };
  const profileOpen = () => {
    setOpen(!open);
  };
  const logout = () => {
    localStorage.setItem('LoggedIn','false');
    navigate("/Login");
  }
  useEffect(() => {
    if (localStorage.getItem('LoggedIn') === 'false') {
      navigate("/Login");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="navbar">
        <Link to="/Discover">
          <img id="chalk" src={Chalk} alt="" />
        </Link>
        <div className="bar">
          <div className="disfor">
            <Link
              id="discover"
              className={StyleDiscover}
              onClick={changeStyleDiscover}
              to="/Discover"
            >
              Discover
            </Link>
            <div
              id="forum"
              className={StyleForum}
              onClick={changeStyleForum}
              to="/Forum"
            >
              Forum
            </div>
          </div>
          <div id="profile" onClick={profileOpen}>
            Hi,<u>Chalk Shapian</u> &nbsp;&nbsp;
            <img className="profile" src={Profile} alt="" />
          </div>
        </div>
      </div>
      {open ? (
        <div className="profileDrop">
          <div className="closeProfile" onClick={profileOpen}>
            X
          </div>
          <div className="pfl">
            <div className="yourPosts">Your Posts</div>
            <div className="yourLiked">Your Liked Posts</div>
            <div className="logout" onClick={logout}>Logout</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
