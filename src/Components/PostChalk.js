import React,{useState} from "react";
import "../PostChalk.css";
import PhotoPost from "./PhotoPost";

const PostChalk = () => {
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
      <div id="name">
        <div className="postBar">
          <div className="postYourChalk">Post Your “CHALK”</div>
          <div className="lol">
            <div className={style1} id="photo" onClick={changeStyle1}>
              Photo
            </div>
            <div className={style2} id="video" onClick={changeStyle2}>
              Video
            </div>
          </div>
        </div>
        <PhotoPost/>
      </div>
    </>
  );
};

export default PostChalk;
