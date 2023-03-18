import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="header">
        <div className="headerLeft">
            <Link to="/" style={{textDecoration: "none"}}><h1 className="header_icon" style={{color: "yellow"}}>LOGO</h1></Link>
            <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            <Link to="/movies/favourite" style={{textDecoration: "none"}}><span>Favourite</span></Link>
            <Link to="/movies/scarch"><input type="text" minLength="3"></input></Link>
            <input type="submit" value="Search"></input>
        </div>
    </div>
  )
}

export default Header