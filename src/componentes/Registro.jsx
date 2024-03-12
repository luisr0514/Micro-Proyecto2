import React, { useState, useEffect } from 'react'
import { crearUsuario } from '../controllers/usuarios'
import { UserContext, useUser } from '../context/user';
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app, db } from "../credenciales";

const auth = getAuth(app)

const Registro = () => {
    const user = useUser()

    const [nombre, setNombre]= useState ('');
    const [apellido, setApelldio]= useState ('');
    const [correo, setCorreo]= useState ('');
    const [password, setPassword]= useState ('');
    const [juego, setJuego]= useState('')
    const [club , setClub]= useState ('')

    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
          navigate('/list', { replace: true })
        }
      }, [user, navigate])

    async function enviar() {
        await crearUsuario({nombre, apellido, correo, password, juego, club})

        alert ('se ingreso correctameente')
        alert('ahora inicie sesion')

        navigate('/')




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
                                <option value="1"onChange={(e)=> setJuego(e.target.value)}>The Witcher 3: Wild Hunt</option>
                                <option value="2"onChange={(e)=> setJuego(e.target.value)}>Red Dead Redemption 2</option>
                                <option value="3"onChange={(e)=> setJuego(e.target.value)}>The Legend of Zelda: Breath of the Wild</option>
                                <option value="4"onChange={(e)=> setJuego(e.target.value)}>Dark Souls III</option>
                                <option value="5"onChange={(e)=> setJuego(e.target.value)}>Super Mario Odyssey</option>
                                <option value="6"onChange={(e)=> setJuego(e.target.value)}>Overwatch</option>
                                <option value="7"onChange={(e)=> setJuego(e.target.value)}>Minecraft</option>
                                <option value="8"onChange={(e)=> setJuego(e.target.value)}>Fortnite</option>
                                <option value="9"onChange={(e)=> setJuego(e.target.value)}>FIFA 22</option>
                                <option value="10"onChange={(e)=> setJuego(e.target.value)}>Call of Duty: Warzone</option>
                                <option value="11"onChange={(e)=> setJuego(e.target.value)}>Assassin's Creed Valhalla"</option>
                                <option value="12"onChange={(e)=> setJuego(e.target.value)}>Cyberpunk 2077</option>
                                <option value="13"onChange={(e)=> setJuego(e.target.value)}>Among Us</option>
                                <option value="14"onChange={(e)=> setJuego(e.target.value)}>Animal Crossing: New Horizons</option>
                                <option value="15"onChange={(e)=> setJuego(e.target.value)}>League of Legends</option>
                                <option value="16"onChange={(e)=> setJuego(e.target.value)}>Genshin Impact</option>
                                <option value="17"onChange={(e)=> setJuego(e.target.value)}>Apex Legends</option>
                                <option value="18"onChange={(e)=> setJuego(e.target.value)}>World of Warcraft</option>
                                <option value="19"onChange={(e)=> setJuego(e.target.value)}>Control</option>
                                <option value="20"onChange={(e)=> setJuego(e.target.value)}>Hades</option>
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
