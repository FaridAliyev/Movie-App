import React from 'react'
import { Link } from 'react-router-dom'
import './moviecard.scss'

function MovieCard({ data }) {

  return (
    <div className="movie-card">
      <Link to={`movie/${data.imdbID}`} >
        <div className="image">
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className="content">
          <div className="text">
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MovieCard