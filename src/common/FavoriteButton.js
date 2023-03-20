import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from "../redux/action";

const FavoriteButton = ({ movie }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state);
  const handleADD = () => {
    dispatch({
      type: ADD_TO_FAVORITES,
      payload: movie,
    });
  };
  const handleREMOVE = () => {
    dispatch({
      type: DELETE_FROM_FAVORITES,
      payload: movie.id,
    });
  };
  console.log(favorites)
  return (
    <div className="fav-flex">
      {favorites.find((ele)=>ele.id===movie.id) ? (
        <div className="fav-btn" onClick={handleREMOVE} style={{backgroundColor:"red"}}>
          REMOVE 
        </div>
      ) : (
        <div className="fav-btn" onClick={handleADD}>
          ADD TO FAVORITES
        </div>
      )}
    </div>
  );
};

export default FavoriteButton;
