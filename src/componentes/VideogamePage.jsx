import React from 'react'
import Navbar from './navegación/Navbar'
import { useParams } from 'react-router-dom';
import ShowVideogame from '../hooks/videogame';

const VideogamePage = () => {
    
    const {titulo}= useParams();
    const videogame = ShowVideogame(titulo);

  return (
    <div>
        <Navbar/>
        <h1 >VIDEOJUEGO</h1>
        <div style= {{display: 'flex', flexDirection: 'column', gap: 62}}> 
            {videogame ? (
                <div key={videogame.id}>
                    <h2>{videogame.titulo}</h2>
                    <p>{videogame.genero}</p>
                    <p>{videogame.descripcion}</p>
                </div>
            ):(
                'Cargando...'
            )}
        </div>
    </div>
  )
}

export default VideogamePage
