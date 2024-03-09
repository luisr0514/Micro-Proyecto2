import React from 'react'
import { useState } from 'react';
import Navbar from './navegación/Navbar';

// Datos de ejemplo de los clubes
const clubes = [
  {
    id: "1",
    nombre: "Club de Aventureros",
    descripcion: "Explora lugares misteriosos y descubre tesoros ocultos con otros entusiastas de la aventura.",
    videojuegos: ["1", "3", "11"]
  },
  {
    id: "2",
    nombre: "Club de Estrategia",
    descripcion: "Reúnete con estrategas brillantes para debatir tácticas, resolver enigmas y conquistar mundos virtuales.",
    videojuegos: ["4", "15", "16"]
  },
  {
    id: "3",
    nombre: "Club de Constructores",
    descripcion: "Comparte tus creaciones en Minecraft, diseña estructuras asombrosas y colabora en proyectos épicos.",
    videojuegos: ["7", "8", "14"]
  },
  {
    id: "4",
    nombre: "Club de Fútbol Virtual",
    descripcion: "Forma parte de un equipo virtual, compite en torneos y demuestra tus habilidades en FIFA 22.",
    videojuegos: ["9", "10", "18"]
  },
  {
    id: "5",
    nombre: "Club de Cazadores de Zombis",
    descripcion: "Únete a otros supervivientes en la lucha contra hordas de no muertos en juegos como Left 4 Dead o Resident Evil.",
    videojuegos: ["2", "13", "17"]
  }
]








const ClubList = () => {
  const [suscripciones, setSuscripciones] = useState([]);


  // Función para manejar la suscripción a un club
  const handleSuscripcion = (clubId) => {
    if (suscripciones.includes(clubId)) {
      setSuscripciones(suscripciones.filter(id => id !== clubId));
    } else {
      setSuscripciones([...suscripciones, clubId]);
    }
  };


  return (
    <div>
      <Navbar/>
      <h1>Nuestros CLubes</h1>
      <ul className= 'clubs-list'>
        {clubes.map(club => (
          <li key={club.id} className='clubs-info'>
            <h2>{club.nombre}</h2>
            <p>{club.descripcion}</p>
            <p>{club.videojuegos}</p>
            <button onClick={() => handleSuscripcion(club.id)}>
              {suscripciones.includes(club.id) ? 'Desuscribirse' : 'Suscribirse'}
            </button>
            <button onClick={() => { /* Redirigir a la página de detalles */ }}>
              Ver Detalles
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default ClubList;
