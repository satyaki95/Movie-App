import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './common/Navbar';
import Favorite from './components/Favorite';
import LandingPage from './components/LandingPage';
import ModalPage from './components/Modal';
import { LOADING, MOVIE_LIST } from './redux/action';

function App() {
  const {modal} = useSelector(state=>state)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({
      type:LOADING
    })
    axios.get("https://api.themoviedb.org/4/list/1?page=1&api_key=4e99170a64b0f45e67ab64bfbf94712d")
    .then((res)=>{
      dispatch({
        type:MOVIE_LIST,
        payload:res.data.results
      })
    })
  },[])
  // console.log(loading)
  // if(loading) return <h2>loading...</h2>
  console.log("Hi")
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/favorites" element={<Favorite/>} />
      </Routes>
      {modal&&<ModalPage movie={modal}/>}
    </div>
  );
}

export default App;


