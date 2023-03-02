import React, { useState } from "react";
import ChalkArt from "./Resources/Chalk_Art.jpg";
import "../Discover.css";


const Discover = () => {
  const [style11, setStyle11] = useState("cont11");
  const [style22, setStyle22] = useState("cont22");
  const [style33, setStyle33] = useState("cont22");
  const changeStyle11 = () => {
    setStyle11("cont11");
    setStyle22("cont22");
    setStyle33("cont22");
  };
  const changeStyle22 = () => {
    setStyle11("cont22"); 
    setStyle22("cont11");
    setStyle33("cont22");
  };
  const changeStyle33 = () => {
    setStyle11("cont22");
    setStyle22("cont22");
    setStyle33("cont11");
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
            <option value="weapons">Weapons</option>
            <option value="others">Others</option>
            <option value="shapianSpecial">Shapian's Special</option>
          </select>
          <div className="searchBar">
            <input id="searchBox" type="search" placeholder="   Search..." />
            <button id="searchBtn" >
            <i class="fa fa-search" />
            </button>
          </div>
          <div className="lola">
            <div className={style11} id="all" onClick={changeStyle11}>
              All
            </div>
            <div className={style22} id="photos" onClick={changeStyle22}>
              Photos
            </div> 
            <div className={style33} id="videos" onClick={changeStyle33}>
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
