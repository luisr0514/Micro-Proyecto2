import React, { useEffect, useState} from 'react'
import Navbar from './navegación/Navbar';
import { Link } from 'react-router-dom'
import { getClubs, getClubs2 } from '../controllers/clubes';


const ClubList = () => {
  const [clubs, setClubs]= useState(null);
    
  useEffect(() => {
    const load = async () => {
      const clubs = await getClubs2();
      setClubs(clubs);
    };
    load();
  }, [])
  
  return (
//OJOOOO faltan los videojuegos
    <div>
      <Navbar/>
      <h1>NUESTROS CLUBES</h1>
        <div style= {{display: 'flex', flexDirection: 'column', gap: 62}}> 
            {clubs?.map(club => (
              <div key={club.id}>
                <h2>
                  <Link to={`/clubes/${club.id}`}>{club.nombre}</Link>
                </h2>
                <p>{club.descripcion}</p>
                <p>{club.juegos}</p>
              </div>
            ))}
        </div>
    </div>
            
    )
  }

export default ClubList
