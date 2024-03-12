import React, { useEffect, useState } from 'react'
import imagen from '../assets/login.png'
import { app, db } from "../credenciales";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom'
import { UserContext, useUser } from '../context/user';
import { collection, getDocs, query, where } from '@firebase/firestore';
import Profile from './Profile';


const auth = getAuth(app)



const Login = () => {
  const user = useUser()

  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const email= correo;

  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/list', { replace: true })
    }
  }, [user, navigate])



  const handleLogin = async () => {

    const user = await signInWithEmailAndPassword(auth, correo, password);
    if (user !== null) {
      navigate('/list');
    } else {
      alert("no se pudo iniciar sesion");
    }
    searchUserByEmail()
  };

  const searchUserByEmail = async () => {
    try {
      const userRef = collection(db, "usuarios")
      const q = query(userRef, where("correo", "==", correo))
      const querySnapshot = await getDocs(q)
      if (!querySnapshot.empty) {
        const user = querySnapshot.docs[0].data();
        console.log("Usuario encontrado:", user);
        // Accede a los demás datos del usuario
        console.log("Nombre:", user.nombre);
        console.log("Apellido:", user.apellido);
        console.log(email)

      } else {
        console.log("No se encontró ningún usuario con ese correo electrónico.");
      }
    } catch (error) {
      console.error("Error al buscar usuario por correo electrónico:", error);
    }
  }
  return (
    <div className="container">
      <div className="row">
        {/* columna pequeña para el formulario */}
        <div className="col-md-4">
          <div className="padre">
            <div className="card card-body shadow-lg">

              <form>
                <input type="text" placeholder='Ingresar correo electronico' className='cajatexto' value={correo} onChange={(e) => setCorreo(e.target.value)} required />
                <input type="password" placeholder='Ingresar contraceña' className='cajatexto' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button className='btmform' onClick={handleLogin} type='button'>Inicia sesion</button>
              </form>
              <h4>
                Si no tienes cuenta
                <Link to='/registro' style={{ marginLeft: '20px' }}>Registrate</Link>
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
