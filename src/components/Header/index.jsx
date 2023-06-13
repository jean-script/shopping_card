import React from 'react';
import SearchBar from '../SearchBar'; 
import CardButton from '../CardButton';
import './styles.css';

function Header(){
  return(
    <header className="header">
      <div className="container">

        <SearchBar/>
        <CardButton/>
      </div>
    </header>
  );
}

export default Header;
