import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* si queremos poner una imagen tipo logo seria aca*/}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx auto">
              <li className="nav-item">
                <Link className="nav-link " to='/list'>ClubList</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/search'>Search</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/profile'>Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>  
    </div>
  )
}

export default Navbar
