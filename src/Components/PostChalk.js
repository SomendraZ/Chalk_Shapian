import React,{useState} from "react";
import "../PostChalk.css";
import PhotoPost from "./PhotoPost";
import VideoPost from "./VideoPost";

const PostChalk = () => {
  const [style111, setStyle111] = useState("cont111");
  const [style222, setStyle222] = useState("cont222");
  const changeStyle111 = () => {
    setStyle111("cont111");
    setStyle222("cont222");
  };
  const changeStyle222 = () => {
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
        {/* <PhotoPost/> */}
        <VideoPost/>
      </div>
    </>
  );
};

export default PostChalk;
