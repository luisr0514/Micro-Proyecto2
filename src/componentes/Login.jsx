import React, { useEffect, useState } from 'react'
import imagen from '../assets/login.png'
import {app} from "../credenciales";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate  } from 'react-router-dom'
import { useUser } from '../context/user';


const auth = getAuth(app) 

const Login = () => {
  const user = useUser()
  


  const [correo, setCorreo]= useState ('');
  const [password, setPassword]= useState ('');

  const navigate = useNavigate()
  
  useEffect(() => {
    if (user) {
      navigate('/home', {replace: true })
    }
  },[user, navigate])

  

  const handleLogin = async () => {

    const user = await signInWithEmailAndPassword (auth, correo, password);
    if (user!==null) {
      navigate('/home');
    } else {
      alert("no se pudo iniciar sesion");
    }
  };

  return (
    <div className="container">
      <div className="row">
        {/* columna pequeña para el formulario */}
        <div className="col-md-4">
          <div className="padre">
            <div className="card card-body shadow-lg">

              <form>
                <input type="text" placeholder='Ingresar correo electronico' className='cajatexto' value={correo} onChange={(e)=> setCorreo(e.target.value)} required/>
                <input type="password" placeholder='Ingresar contraceña' className='cajatexto' value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                <button className='btmform'onClick={handleLogin} type='button'>Inicia sesion</button>
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
