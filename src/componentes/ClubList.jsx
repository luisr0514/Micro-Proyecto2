import React, { useEffect, useState} from 'react'
import Navbar from './navegación/Navbar';
import {db} from '../credenciales'
import { collection, getDocs, query, where} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'


const ClubList = () => {

    const [ data, setData] = useState([]);
    const {detalleId}= useParams();

    useEffect(()=> {
        try{
            const dbCollection = collection(db, 'clubes');
            getDocs(dbCollection)
            .then(res => setData(res.docs.map(club =>({id:club.id, ...club.data()}))))
            //por cada club que este en el array devuelve su id y un objeto con su informacion

        }catch (error){
            console.error('Error al obtener los datos de los clubes', error);
            setData([]);
        }
    }, [detalleId]);

    

    
    return (
//OJOOOO faltan los videojuegos
        <div>
          <Navbar/>
          <div className= 'design'>
          <h1>NUESTROS CLUBES</h1>
            <div>
                {data.map(club => (
                  <div key={club.id}>
                    <h2>
                      <Link to={'/clubes/${club.id}'}>{club.nombre}</Link>
                    </h2>
                    <p>{club.descripcion}</p>
                    <p>{club.juegos}</p>
                  </div>
                ))}
            </div>
          </div>
            
        </div>
    )
  }

export default ClubList
