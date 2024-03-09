import React from 'react';
import { Link, Outlet} from 'react-router-dom';

export const Navbar = () =>{
    return(
        <>
            <header>
                <h1>
                    <Link to='/'>Logo</Link>
                </h1>

                <nav>
                    <Link to='/login'>Iniciar Sesión</Link>
                    <Link to='register'>Registrarse</Link>
                </nav>
                <div className= "user">

                </div>
            </header>
                

            <Outlet />
        </>
    )
}