import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { crearUsuario } from '../controllers/usuarios'



const Registro = () => {

    const [nombre, setNombre]= useState ('');
    const [apellido, setApelldio]= useState ('');
    const [correo, setCorreo]= useState ('');
    const [password, setPassword]= useState ('');

    async function enviar() {
        await crearUsuario({nombre, apellido, correo, password})

        alert ('se ingreso correctameente')


    }


  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-5">
                <div className="padre">
                    <div className="card card-boddy shadow-lg">
                        <form>
                            <input type="text" placeholder='Ingresa tu nombre' className='cajatexto' value={nombre} onChange={(e)=> setNombre(e.target.value)} />
                            <input type="text" placeholder='Ingresa tu apellido' className='cajatexto' value={apellido} onChange={(e)=> setApelldio(e.target.value)}/>
                            <input type="text" placeholder= 'Ingresa tu correo electronico'className="cajatexto"value={correo} onChange={(e)=> setCorreo(e.target.value)}/>
                            <input type="password" placeholder= 'Ingresa tu contraseña'className="cajatexto" value={password} onChange={(e)=> setPassword(e.target.value)}/>
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
