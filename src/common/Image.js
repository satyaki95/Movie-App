import React from 'react'
import { useDispatch } from 'react-redux'
import { MODAL_ITEM } from '../redux/action';

const Image = ({movie}) => {
    const dispatch = useDispatch();
    const handleClick = ()=>{
        // console.log("modal",movie)
        dispatch({
            type:MODAL_ITEM,
            payload:movie
        })
    }

  return (
    <div className='card-img' onClick={handleClick}>
        <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/"+movie.poster_path} alt={movie.title} />
    </div>
  )
}

export default Image
