import React, { useState } from "react";
import ChalkArt from "./Resources/Chalk_Art.jpg";
import "../Discover.css";


const Discover = () => {
  const [style1, setStyle1] = useState("cont11");
  const [style2, setStyle2] = useState("cont22");
  const [style3, setStyle3] = useState("cont22");
  const changeStyle1 = () => {
    setStyle1("cont11");
    setStyle2("cont22");
    setStyle3("cont22");
  };
  const changeStyle2 = () => {
    setStyle1("cont22"); 
    setStyle2("cont11");
    setStyle3("cont22");
  };
  const changeStyle3 = () => {
    setStyle1("cont22");
    setStyle2("cont22");
    setStyle3("cont11");
  };
  return (
    <>
      <div className="discover">
        <div className="discoverBar">
          <select name="filter" className="custom-select" id="filter">
            <option value="newestPost">Newest Posts</option>
            <option value="mostLiked">Most Liked</option>
            <option value="simpleDesign">Simple Design</option>
            <option value="creativeDesign">Creative Design</option>
            <option value="faces">Faces</option>
            <option value="architectures">Architectures</option>
            <option value="weopons">Weopons</option>
            <option value="shapianSpecial">Shapian's Special</option>
          </select>
          <div className="searchBar">
            <input id="searchBox" type="search" placeholder="   Search..." />
            <button id="searchBtn" >
            <i class="fa fa-search" />
            </button>
          </div>
          <div className="lol">
            <div className={style1} id="all" onClick={changeStyle1}>
              All
            </div>
            <div className={style2} id="photos" onClick={changeStyle2}>
              Photos
            </div>
            <div className={style3} id="videos" onClick={changeStyle3}>
              Videos
            </div>
          </div>
        </div>
        <div className="content">
          <div className="imgContent">
            <img src={ChalkArt} alt="" id="imgChalk"/>
            <div className="craftName">Man's Face</div>
            <div className="artistName">SomendraZ</div>
          </div>
          <div className="imgContent">
            <img src={ChalkArt} alt="" id="imgChalk"/>
            <div className="craftName">Man's Face</div>
            <div className="artistName">SomendraZ</div>
          </div>
          <div className="imgContent">
            <img src={ChalkArt} alt="" id="imgChalk"/>
            <div className="craftName">Man's Face</div>
            <div className="artistName">SomendraZ</div>
          </div>
          <div className="imgContent">
            <img src={ChalkArt} alt="" id="imgChalk"/>
            <div className="craftName">Man's Face</div>
            <div className="artistName">SomendraZ</div>
          </div>
          <div className="imgContent">
            <img src={ChalkArt} alt="" id="imgChalk"/>
            <div className="craftName">Man's Face</div>
            <div className="artistName">SomendraZ</div>
          </div>
          <div className="imgContent">
            <img src={ChalkArt} alt="" id="imgChalk"/>
            <div className="craftName">Man's Face</div>
            <div className="artistName">SomendraZ</div>
          </div>
          <div className="imgContent">
            <img src={ChalkArt} alt="" id="imgChalk"/>
            <div className="craftName">Man's Face</div>
            <div className="artistName">SomendraZ</div>
          </div>
          <div className="imgContent">
            <img src={ChalkArt} alt="" id="imgChalk"/>
            <div className="craftName">Man's Face</div>
            <div className="artistName">SomendraZ</div>
          </div>
          <div className="imgContent">
            <img src={ChalkArt} alt="" id="imgChalk"/>
            <div className="craftName">Man's Face</div>
            <div className="artistName">SomendraZ</div>
          </div>
          <div className="imgContent">
            <img src={ChalkArt} alt="" id="imgChalk"/>
            <div className="craftName">Man's Face</div>
            <div className="artistName">SomendraZ</div>
          </div>
          <div className="imgContent">
            <img src={ChalkArt} alt="" id="imgChalk"/>
            <div className="craftName">Man's Face</div>
            <div className="artistName">SomendraZ</div>
          </div>
          <div className="imgContent">
            <img src={ChalkArt} alt="" id="imgChalk"/>
            <div className="craftName">Man's Face</div>
            <div className="artistName">SomendraZ</div>
          </div>
          <div className="imgContent">
            <img src={ChalkArt} alt="" id="imgChalk"/>
            <div className="craftName">Man's Face</div>
            <div className="artistName">SomendraZ</div>
          </div>
          <div className="imgContent">
            <img src={ChalkArt} alt="" id="imgChalk"/>
            <div className="craftName">Man's Face</div>
            <div className="artistName">SomendraZ</div>
          </div>
          <div className="imgContent">
            <img src={ChalkArt} alt="" id="imgChalk"/>
            <div className="craftName">Man's Face</div>
            <div className="artistName">SomendraZ</div>
          </div>
          {/* <div className="videoContent"></div> */}
        </div>
      </div>
    </>
  );
};

export default Discover;
