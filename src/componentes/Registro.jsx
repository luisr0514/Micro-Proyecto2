import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import appFirebase from "../credenciales";
import { crearUsuario } from '../controllers/usuarios'
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import Home from './Home';

const auth = getAuth(appFirebase) 

const Registro = () => {

    const [nombre, setNombre]= useState ('');
    const [apellido, setApelldio]= useState ('');
    const [correo, setCorreo]= useState ('');
    const [password, setPassword]= useState ('');
    const navigate = useNavigate()

    async function enviar() {
        
        await crearUsuario({nombre, apellido, correo, password})

        await createUserWithEmailAndPassword (auth, correo, password);

        alert ('se ingreso correctameente')
        
        navigate("/home")


    }


  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-5">
                <div className="padre">
                    <div className="card card-boddy shadow-lg">
                        <form>
                            <input type="text" placeholder='Ingresa tu nombre' className='cajatexto' value={nombre} onChange={(e)=> setNombre(e.target.value)} required/>
                            <input type="text" placeholder='Ingresa tu apellido' className='cajatexto' value={apellido} onChange={(e)=> setApelldio(e.target.value)} required/>
                            <input type="text" placeholder= 'Ingresa tu correo electronico'className="cajatexto"value={correo} onChange={(e)=> setCorreo(e.target.value)} required/>
                            <input type="password" placeholder= 'Ingresa tu contraseña'className="cajatexto" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                            <select className='select' id="">
                                <option value="">--Cual es tu juego favorito--</option>
                                <option value="juego 1">counter</option>
                                <option value="juego2">red dead redemtion 2</option>
                                <option value="juego3">Cyberpunk</option>
                            </select>
                            <button className='btmform'onClick={enviar}type='button'>Registrarse</button>

                        </form>
                        <h4>
                            Ya tienes una cuenta
                            <Link to='/login' style={{marginLeft: '20px' }}>Inicia sesion</Link>
                        </h4>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Registro
