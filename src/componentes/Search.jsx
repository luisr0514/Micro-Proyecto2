
import Navbar from './navegación/Navbar';
import SearchBar from './SearchBar';
import React from 'react';

const Search = () => {

  return (
    <div >
      <Navbar/>
      <h1 >BUSCADOR</h1>
      <div className= "style">
        <div className = 'search-bar-container'>
          <SearchBar/>
        </div>
      </div>
      
    </div>
  )
}

export default Search
