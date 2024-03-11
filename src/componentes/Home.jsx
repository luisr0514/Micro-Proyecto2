import React , {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../controllers/usuarios'
import { useUser } from '../context/user'

const Home = () => {
  const user = useUser();
  user.displayName 
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate('/', {replace: true })
    }
  },[user, navigate])
  return (
    <div>
      <h2>BIENVENIDO</h2>
      <Link to="/">Iniciar sesion</Link>
      <button type="button" onClick={() => logOut()}>cerrar sesion</button>
      <h3>{}</h3>

    </div>
  )
}

export default Home
