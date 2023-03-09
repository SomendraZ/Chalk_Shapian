import React from "react";
import "../CSS/ImagePost.css";

const ImagePost = () => {
  return (
    
    <>
      <div className="photo">
        <div className="photoDetails">
          <div className="photoImage">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/500px-Plus_symbol.svg.png"
              alt=""
              id="photoImage"
            />
            Add Image Link
          </div>
          <div className="photoRight">
            <div className="imageTitle">Post Title :</div>
            <input id="imageTitle" placeholder="Image Title" />
            <div className="imageToolsUsed">Tools Used :</div>
            <input id="imageToolsUsed" placeholder="Tools Used" />
            <div className="imageArtist">Artist Name :</div>
            <input id="imageArtist" placeholder="Artist Name" />
          </div>
        </div>
        <div id="filters">Filters :</div>
        <div className="filters">
          <label className="container">
            <input type="checkbox" id="checkbox"/>
            Simple Design
          </label>
          <label className="container">
            <input type="checkbox" id="checkbox"/>
            Creative Design
          </label>
          <label className="container">
            <input type="checkbox" id="checkbox"/>
            Faces
          </label>
          <label className="container">
            <input type="checkbox" id="checkbox"/>
            Architectures
          </label>
          <label className="container">
            <input type="checkbox" id="checkbox"/>
            Weapons
          </label>
          <label className="container">
            <input type="checkbox" id="checkbox"/>
            Others
          </label>
        </div>
        <div className="description">
          <div className="photoDescription">Description :</div>
          <textarea id="photoDescription" placeholder="Description" />
        </div>
        <div className="post">POST</div>
      </div>
    </>
  );
};

export default ImagePost;
