import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "react";
import "./Featured.scss";

const Featured = ({ type }) => {

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        alt=""
        className="main"
        src="https://occ-0-325-1007.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABcWZfTcKexNtsaLYSC5D4ke0b3XGuYZKiC2in-xjn0Q8PnRPmo_vzNxCGlre5eOi8I-o-2h8bY9r1XUWM3S54njN07Ibgu-BHVaX.jpg?r=8b4"
      />
      <div className="details">
        {/* <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" /> */}
        <i>PANIC ROOM</i>
        <span className="movie-desc">
          A woman and her daughter are caught in a game of cat-and-mouse with
          burglars in their New York City home and are force to retreat inside a
          vault.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span> Play</span>
          </button>
          <button className="info">
            <InfoOutlined />
            <span> Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
