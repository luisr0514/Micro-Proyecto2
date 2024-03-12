import React from 'react'
import Navbar from './navegación/Navbar'
import { useUser } from '../context/user'
import { useContext } from 'react'
import obtenerusuario from './Login'


export default function Profile () {
  const user = useUser()
  return (
    <div>
      <Navbar/>
      <h1>PERFIL DE USUARIO</h1>
    </div>
  )
}

// export default Profile

