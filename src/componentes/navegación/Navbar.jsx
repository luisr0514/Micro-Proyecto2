import React, {useEffect} from 'react'
import {Link , useNavigate} from 'react-router-dom'
import { logOut } from '../../controllers/usuarios'
import { useUser } from '../../context/user'


const Navbar = () => {
  const user = useUser();
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate('/', {replace: true })
    }
  },[user, navigate])
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
              <li className="nav-item">
                <button type="button" onClick={() => logOut()}>cerrar sesion</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>  
    </div>
  )
}

export default Navbar
