import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Pages/home/home';
import MovieList from './Component/movieList/movieList';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<h1>Movie Details</h1>}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="movies/scarch" element={<h1>scarch</h1>}></Route>
          <Route path="movies/favourite" element={<h1>Favourite</h1>}></Route>
          <Route path="/*" element={<h1>Error</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
