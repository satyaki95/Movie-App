import { Star } from '@mui/icons-material'
import React from 'react'

const Rating = ({movie}) => {
  return (
    <div className="rating">
            Rating:
            <span>
              {[...Array(Math.round(movie.vote_average / 2))].map((e, i) => (
                <Star
                  key={`star-${i}`}
                  className="starIcon"
                  aria-hidden="true"
                  style={{ color: "red", fontSize: "14px" }}
                />
              ))}
              {[...Array(5 - Math.round(movie.vote_average / 2))].map(
                (e, i) => (
                  <Star
                    key={`star-${i}`}
                    className="emptyStarIcon"
                    aria-hidden="true"
                    style={{ color: "", fontSize: "14px" }}
                  />
                )
              )}
            </span>
          </div>
  )
}

export default Rating
