import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>BIENVENIDO</h2>
      {/* <Link href="/login">Iniciar sesion</Link> */}
      <a href="/login">Iniciar sesion</a>
    </div>
  )
}

export default Home
