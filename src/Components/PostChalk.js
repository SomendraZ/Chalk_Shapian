import React, { useState } from "react";
import "../CSS/PostChalk.css";
import ImagePost from "./ImagePost";
import VideoPost from "./VideoPost";

const PostChalk = () => {
  const [style111, setStyle111] = useState("cont111");
  const [style222, setStyle222] = useState("cont222");
  const [isImage, setIsImage] = useState(true)

  const changeStyle111 = () => {
    setIsImage(true)
    setStyle111("cont111");
    setStyle222("cont222");
  };
  const changeStyle222 = () => {
    setIsImage(false)
    setStyle111("cont222");
    setStyle222("cont111");
  };
  return (
    <>
      <div id="name">
        <div className="postBar">
          <div className="postYourChalk">Post Your “CHALK”</div>
          <div className="lolala">
            <div className={style111} id="image" onClick={changeStyle111}>
              Image
            </div>
            <div className={style222} id="video" onClick={changeStyle222}>
              Video
            </div>
          </div>
        </div>
        {isImage ? <ImagePost/> : <VideoPost/>}
      </div>
    </>
  );
};

export default PostChalk;
