import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchMovieOrShowDetailAsync, removeSelectedMovieOrShow } from '../../features/movies/movieSlice'
import './moviedetail.scss'

function MovieDetail() {

  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedMovieOrShow: data } = useSelector(state => state.movie);

  useEffect(() => {
    dispatch(fetchMovieOrShowDetailAsync(id))
    return () => {
      dispatch(removeSelectedMovieOrShow())
    }
  }, [dispatch, id])

  return (
    <div id="movie-detail">
      <div className="container">
        {Object.keys(data).length === 0 ?
          <div className='text-white'>
            Loading...
          </div>
          :
          <div className="row">
            <div className="col-12 d-lg-none">
              <div className="poster">
                <img src={data.Poster} alt={data.Title} />
              </div>
            </div>
            <div className="col-lg-8 col-12">
              <div className="details">
                <h1 className='title'>{data.Title}</h1>
                <div className="stats">
                  <div className="stat">
                    <p>IMDB Rating <i className="fa-solid fa-star text-warning"></i>: {data.imdbRating}</p>
                  </div>
                  <div className="stat">
                    <p>IMDB Votes <i className="fa-solid fa-thumbs-up text-light"></i>: {data.imdbVotes}</p>
                  </div>
                  <div className="stat">
                    <p>Runtime <i className="fa-solid fa-film text-white"></i>: {data.Runtime}</p>
                  </div>
                  <div className="stat">
                    <p>Year <i className="fa-solid fa-calendar text-light"></i>: {data.Year}</p>
                  </div>
                </div>
                <p className='plot'>{data.Plot}</p>
                <div className="infos">
                  <div className="info">
                    <p className="info-prop">Director</p>
                    <p className="info-value">{data.Director}</p>
                  </div>
                  <div className="info">
                    <p className="info-prop">Actors</p>
                    <p className="info-value">{data.Actors}</p>
                  </div>
                  <div className="info">
                    <p className="info-prop">Genres</p>
                    <p className="info-value">{data.Genre}</p>
                  </div>
                  <div className="info">
                    <p className="info-prop">Languages</p>
                    <p className="info-value">{data.Language}</p>
                  </div>
                  <div className="info">
                    <p className="info-prop">Awards</p>
                    <p className="info-value">{data.Awards}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <div className="poster">
                <img src={data.Poster} alt={data.Title} />
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default MovieDetail