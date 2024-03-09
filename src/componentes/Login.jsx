import React, { useState } from 'react'
import imagen from '../assets/login.png'
import appFirebase from "../credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom'

const auth = getAuth(appFirebase) 

const Login = () => {

  const [registrando, setRegistrando] = useState(false)

  return (
    <div className="container">
      <div className="row">
        {/* columna pequeña para el formulario */}
        <div className="col-md-4">
          <div className="padre">
            <div className="card card-body shadow-lg">

              <form>
                <input type="text" placeholder='Ingresar correo electronico' className='cajatexto' />
                <input type="password" placeholder='Ingresar contraceña' className='cajatexto' />
                <button className='btmform'>Inicia sesion</button>
              </form>
              <h4>
                Si no tienes cuenta 
                <Link to='/registro' style={{marginLeft: '20px' }}>Registrate</Link>
              </h4>
            </div>
          </div>
        </div>
        {/* columna mas grande */}
        <div className="col-md-8">
          <img src={imagen} alt="" className="tamaño-imagen" />
        </div>
      </div>
    </div>
  )
}

export default Login
