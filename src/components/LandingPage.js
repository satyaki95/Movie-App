import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../common/Card';
import Pagination from '../common/Pagination';
import { MPAGE } from '../redux/action';

const LandingPage = () => {

  const {loading,list,mpage} = useSelector(state=>state)


  if(loading)return <h1>Loding...</h1>

  return (
    <>
    <div>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
        {
          list.slice(mpage,mpage+10).map((movie,idx)=>{
            return (
              <Card movie={movie}/>
            )
          })
        }
      </div>
      <Pagination array={list} action={MPAGE} page={mpage} />
    </div>
    </>
  )
}

export default LandingPage


// id: 634649
// original_title: "Spider-Man: No Way Home"
// overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."

// poster_path: "/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg"
// release_date: "2021-12-15"
// title: "Spider-Man: No Way Home"
// vote_count