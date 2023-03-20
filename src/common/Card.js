import React from "react";

import FavoriteButton from "../common/FavoriteButton";
import Image from "../common/Image";
import Rating from "./Rating";
// import { LOADING, MOVIE_LIST } from '../redux/action';
const Card = ({ movie }) => {
  return (
    <div key={movie.id} className="card">
      <div>
        <Image movie={movie} />
        <div className="content">
          <div>
            Title: <b>{movie.title}</b>
          </div>
          <div>
            Release Date: <b>{movie.release_date}</b>
          </div>
          <Rating movie={movie} />
        </div>
        <FavoriteButton movie={movie} />
      </div>
    </div>
  );
};

export default Card;
