import React from 'react'
import { Link } from 'react-router-dom'
import user from '../../images/user.png'
import './header.scss'

function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="logo">
              <Link to="/">
                <h1>Movie App</h1>
              </Link>
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