import React from 'react'
import { Link } from 'react-router-dom'
import './moviecard.scss'

function MovieCard({ data }) {

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
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
    </div>
  )
}

export default MovieCard