import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import './SearchBar.css'
import Navbar from './navegación/Navbar';
import { Link } from 'react-router-dom';


const SearchBar = () => {
    
  const [ titulo, setTitulo ] = useState('');
  
  return (
    < div>
      <Navbar/>
      <h1 >BUSCADOR</h1>
      <div className = 'search-bar-container'>
        <h4>Ingresa el nombre del videojuego que desas buscar</h4>
        <div className = 'input-wrapper'>
          <FaSearch id ='search-icon'/>
          <input 
              placeholder='Escribe para buscar...' 
              value={titulo} 
              onChange={(e) => setTitulo(e.target.value)}
          />
          <Link to= {`/search/videogame/${titulo}`} className='btmform' type='button'>Buscar Videojuego</Link>
        </div>
      </div>
    </div>   

  )
}

export default SearchBar


