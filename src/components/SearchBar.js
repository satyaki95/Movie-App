import { Search } from "@mui/icons-material";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LOADING, MOVIE_LIST } from "../redux/action";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  // console.log(list)
  const handleChange = (e) => {
    setText(e);
  };

  const handleSearch = () => {
    if (text.length < 3) {
      alert("Please enter more than 2 characture");
      return;
    }
    dispatch({
      type: LOADING,
    });
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=4e99170a64b0f45e67ab64bfbf94712d&query=" +
          text
      )
      .then((res) => {
        dispatch({
          type: MOVIE_LIST,
          payload: res.data.results,
        });
        setText("");
      });
  };

  return (
    <div className="search">
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search..."
        />
        {/* <span>
          <Search />
        </span> */}
      </div>
      <button className="search-btn" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
