import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMoviesAsync, fetchShowsAsync } from '../../features/movies/movieSlice'
import user from '../../images/user.png'
import './header.scss'

function Header() {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!term) {
      return alert("Please enter a search text!");
    }
    dispatch(fetchMoviesAsync(term));
    dispatch(fetchShowsAsync(term));
    setTerm("");
  }

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="logo">
              <Link to="/">
                <h1>Movie App</h1>
              </Link>
            </div>
          </div>
          <div className="col-6">
            <div className="search-bar">
              <form onSubmit={submitHandler}>
                <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} placeholder='Search movies or shows...' />
                <button type='submit'>
                  <i className='fa fa-search'></i>
                </button>
              </form>
            </div>
          </div>
          <div className="col-3">
            <div className="user">
              <img src={user} alt="User" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header