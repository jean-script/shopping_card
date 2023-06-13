import React, { useContext } from 'react';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import './styles.css';
import AppContext from '../../context/AppContext';

function CardButton(){

  const { cartItem, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return(
    <button 
      type="button" 
      className="card__button"
      onClick={()=> setIsCartVisible(!isCartVisible)}
    >
      <AiOutlineShoppingCart/>
      {cartItem.length > 0 &&(
        <span className="cart-status">{cartItem.length}</span>
      )}
    </button>
  );
}

export default CardButton;
