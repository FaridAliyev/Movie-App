import React from 'react'
import './footer.scss'

function Footer() {
  return (
    <footer>
      <div className="text">
        <h2>Movie App</h2>
        <p>©{new Date().getFullYear()}, Movie App. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer