import React, {useState, useEffect} from 'react'
// import {FaSearch} from 'react-icons/FaSearch'
import './SearchBar.css'
import { collection, getDocs, query, where, } from 'firebase/firestore';
import { db } from '../credenciales';



const SearchBar = () => {
    
    const [input, setInput]= useState('');

    useEffect(() => {
        const fetchData = async (value) => {
            try {
                const q = query(collection(db, 'juegos'), where('titulo', '==', value)); // Crea una consulta para buscar juegos por nombre
                getDocs(q)
                .then(res => setInput(res.docs.map(game =>({id:game.id, ...game.data()}))))
            } catch (error) {
                console.error('Error al obtener los datos de los juegos', error);
                setInput([]);
            }
        }

        fetchData(input); // Llama a fetchData cuando el componente se monta y cada vez que el valor del input cambia
    }, [input]);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    

  return (
    <div className = 'input-wrapper'>
        <FaSearch id ='search-icon'/>
        <input 
            placeholder='Escribe para buscar...' 
            value={input} 
            onChange={handleChange}
        />
    </div>
      
      

  )
}

export default SearchBar


