import React from "react";
import { useSelector } from "react-redux";
import Card from "../common/Card";
import Pagination from "../common/Pagination";
import { FPAGE } from "../redux/action";

const Favorite = () => {
  const { favorites, fpage } = useSelector((state) => state);
  console.log(favorites);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {favorites.length <= 0 ? (
          <h1>Please first add movies for Fovorites.</h1>
        ) : (
          favorites.map((movie, idx) => {
            return <Card movie={movie} />;
          })
        )}
      </div>
      <Pagination array={favorites} action={FPAGE} page={fpage} />

    </div>
  );
};

export default Favorite;
