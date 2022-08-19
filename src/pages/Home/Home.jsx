import React, { useEffect } from 'react'
import MovieList from '../../components/MovieList/MovieList'
import { useDispatch } from 'react-redux'
import { fetchMoviesAsync, fetchShowsAsync } from '../../features/movies/movieSlice'


function Home() {

  const dispatch = useDispatch();
  const movieTerm = "Harry";
  const showTerm = "Friends";

  useEffect(() => {
    dispatch(fetchMoviesAsync(movieTerm))
    dispatch(fetchShowsAsync(showTerm))
  }, [dispatch])


  return (
    <div id="home">
      <MovieList />
    </div>
  )
}

export default Home;