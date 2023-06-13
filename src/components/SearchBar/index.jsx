import React, { useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import './styles.css';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

function SearchBar(){

  const { setProducts, setLoading } = useContext(AppContext);

  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async (e) =>{
    e.preventDefault();
    
    if(searchValue.trim() === ''){
      alert('Digite algo');
      return;
    }

    setLoading(true);
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setSearchValue('');
    setLoading(false);
  };

  return(
    <form onSubmit={handleSearch} className="searchBar">
      <input 
        type="search" 
        placeholder="Buscar produtos" 
        className="search__input"
        required
        value={searchValue}
        onChange={({ target })=> setSearchValue(target.value)}
      />
      <button type="submit" className="search__button">
        <BsSearch/>
      </button>
    </form>
  );
}

export default SearchBar;
