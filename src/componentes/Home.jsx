import React , {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../controllers/usuarios'
import { useUser } from '../context/user'
import Navbar from './navegación/Navbar'

const Home = () => {
  const user = useUser();
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate('/', {replace: true })
    }
  },[user, navigate])
  return (
    <div>
      <Navbar/>
      <h2>BIENVENIDO</h2>
      <Link to="/">Iniciar sesion</Link>
      <h3>{}</h3>

    </div>
  )
}

export default Home
