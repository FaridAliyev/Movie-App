import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'
import Slider from 'react-slick'
import { Settings } from '../../common/settings'
import './movielist.scss'

function MovieList() {

  const { movies, shows, loading } = useSelector(state => state.movie);
  return (
    <div id="movieList">
      <div className="container">
        <h2>Movies</h2>
        {
          loading ? (<div className='alert alert-warning'>Loading...</div>) :
            movies.Response === 'True' ?
              (
                <div className="row">
                  <Slider {...Settings}>
                    {
                      movies.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
                    }
                  </Slider>
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
          loading ? (<div className='alert alert-warning'>Loading...</div>) :
          shows.Response === 'True' ?
            (
              <div className="row">
                <Slider {...Settings}>
                  {
                    shows.Search.map((show, index) => <MovieCard key={index} data={show} />)
                  }
                </Slider>
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