import React from 'react'
import imagen from '../assets/login.png'
import '../App.css'

const Login = () => {
  return (
    <div className='container'>
      <div className="row"> 
        {/* columna pequeña para el formulario */}
        <div className="col-mid-4">
            <div className="padre">
                <div className="card card-body">
                  <form>
                    <input type="text" placeholder='Ingresar correo electronico' />
                    <input type="password" placeholder='Ingresar contraceña' />
                    <button>Resgistrace</button>
                  </form>




                </div>
            </div>


    </div>
        {/* columna mas grande */}
        <div className="col-md-8">
            <img src={imagen} alt="" className='tamaño-imagen' />
        </div>
      </div>
  </div>
  )
}

export default Login
