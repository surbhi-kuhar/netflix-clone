import React from "react";
import "./Watch.scss";
import { ArrowBackOutlined } from "@material-ui/icons";
import '../home/Home';
import { useNavigate } from "react-router-dom";

function Watch() {

  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/home');
  }

  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined className="icon" onClick={handleClick} />
        Home
      </div>
      <div>
        <video
          src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
          autoPlay
          controls
          progress
          className="video"
        />
      </div>
    </div>
  );
}

export default Watch;
