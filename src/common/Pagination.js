import React from 'react'
import { useDispatch } from 'react-redux';

const Pagination = ({array,page,action}) => {
    const dispatch = useDispatch();
  return (
    <div className='pagination'>
      <div>
        <button onClick={()=>{
          dispatch({
            type:action,
            payload:page-10
          })
        }} disabled={page===0}>Prev</button>
        <button onClick={()=>{
          dispatch({
            type:action,
            payload:0
          })
        }} disabled={page===0}>First</button>
        <button onClick={()=>{
          dispatch({
            type:action,
            payload:array.length-10
          })
        }} disabled={array.length-page<=10} >Last</button>
        <button onClick={()=>{
          dispatch({
            type:action,
            payload:page+10
          })
        }} disabled={array.length-page<=10}>Next</button>
      </div>
    </div>
  )
}

export default Pagination
