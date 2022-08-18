import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'
import './movielist.scss'

function MovieList() {

  const { movies } = useSelector(state => state.movie);
  const { shows } = useSelector(state => state.movie)
  console.log(movies);

  return (
    <div id="movieList">
      <div className="container">
        <h2>Movies</h2>
        {
          movies.Response === 'True' ?
            (
              <div className="row gy-4">
                {
                  movies.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
                }
              </div>
            )
            :
            (
              <div className="alert alert-danger">
                Something went wrong!
              </div>
            )
        }
        <h2>Shows</h2>
        {
          shows.Response === 'True' ?
            (
              <div className="row gy-4">
                {
                  shows.Search.map((show, index) => <MovieCard key={index} data={show} />)
                }
              </div>
            )
            :
            (
              <div className="alert alert-danger">
                Something went wrong!
              </div>
            )
        }
      </div>
    </div>
  )
}

export default MovieList