import React from 'react'
import { useDispatch } from 'react-redux';
import FavoriteButton from '../common/FavoriteButton';
import Rating from '../common/Rating';
import { MODAL_ITEM } from '../redux/action';

const ModalPage = ({movie}) => {
    // console.log(movie);
    const dispatch = useDispatch();

    const closeModal = ()=>{
      dispatch({
        type:MODAL_ITEM,
      })
    }

    const handleClick = (e) => {
      if (e.target.classList.contains("backdrop")) {
        // setSelectedImg(null);
        closeModal();
      }
    };
  return (
    <div
      className="backdrop"
      onClick={handleClick}
    >
      <div className='modal-card'>
        <div style={{margin:"8px"}}>
          <img
          src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/"+movie.poster_path}
          alt={movie.title}
          />
        </div>
        <div className='modal-content'>
          <h1>{movie.title}</h1>
          <div>
          <div><span style={{
            backgroundColor:"green",
            padding:"8px",
            // margin:"5px",
            borderRadius:"8px"
          }}>R</span>{"    "}<span>{movie.release_date}</span></div>
          </div>
          <div>
          <h2>Overview</h2> 
          <div>{movie.overview}</div>
          </div>
          <Rating movie={movie} />
          <div style={{width:"300px"}}>
            <FavoriteButton movie={movie} />
          </div>
        </div>
        <div className='modal-close' onClick={closeModal} >x</div>
      </div>
    </div>
  )
}

export default ModalPage
