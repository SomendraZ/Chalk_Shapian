import React from "react";
import Chalk from "../Resources/chalk_shapian.PNG";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <hr />
        <div id="footer">
          <div className="inc">
            <img src={Chalk} alt="" id="incLogo" />
            <div id="incName">
              <div className="white">Copyright © 2023&nbsp;</div>
              <div className="yellow">C</div>
              <div className="green">ha</div>
              <div className="yellow">lk</div>
              <div className="green">S</div>
              <div className="yellow">ha</div>
              <div className="green">pian</div>
              <div className="white">, Inc.</div>
            </div>
          </div>
          <div className="vLine" />
          <div className="follow">
            <div id="follow">
              <div className="white">Follow us at:&nbsp;</div>
              <div className="media">
                &nbsp;&nbsp;&nbsp;
                <a
                  href="https://www.instagram.com/chalk_shapian/?next=%2F&hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    id="insta"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
                    alt=""
                  />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.youtube.com/@chalkshapian" target="_blank" rel="noreferrer">
                  <img
                    id="youtube"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
                    alt=""
                  />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://twitter.com/chalk_shapian" target="_blank" rel="noreferrer">
                  <img
                    id="twitter"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="hFooterLine" />
            <div id="contact">
              <div className="white">Contact us at:&nbsp;</div>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=chalk.shapian@gmail.com" class="contact" target="_blank" rel="noreferrer">
                <div className="yellow">c</div>
                <div className="green">ha</div>
                <div className="yellow">lk</div>
                <div className="white">.</div>
                <div className="green">s</div>
                <div className="yellow">ha</div>
                <div className="green">pian</div>
                <div className="white">@gmail.com</div>
              </a>
            </div>
          </div>
          <div className="vLine" />
          <div className="terms">
            <div id="terms">Terms & Conditions</div>
            <div id="privacy">Privacy Policy</div>
            <div id="about">About</div>
          </div>
          <div className="vLine" />
          <div className="ads">
            <div id="ads"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
