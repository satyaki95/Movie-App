import React from 'react'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../components/SearchBar'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='navbar'>
      <div className='logo' onClick={()=>navigate("/")}>WOWLABZ</div>
      <div><SearchBar/></div>
      <div className='fav-nav' onClick={()=>navigate("/favorites")}>Favorites</div>
    </div>
  )
}

export default Navbar
