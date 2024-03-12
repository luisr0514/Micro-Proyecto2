
import {UseClub} from '../hooks/club'
import { useParams } from 'react-router-dom'
import Navbar from './navegación/Navbar'

const ClubPage = () => {

  const {id}= useParams();
  const club = UseClub(id);


  return (
    <div>
          <Navbar/>
          <h1> CLUB</h1>
            <div style= {{display: 'flex', flexDirection: 'column', gap: 62}}> 
                {club ? (
                  <div key={club.id}>
                    <h2>{club.nombre}</h2>
                    <p>{club.descripcion}</p>
                    <p>{club.juegos}</p>
                  </div>
                ):(
                  'Cargando...'
                )}
            </div>
        </div>
  )
}

export default ClubPage
