import React, { useContext } from 'react';
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrecy';
import { BsCartDashFill } from 'react-icons/bs';

import './styles.css';
import AppContext from '../../context/AppContext';

export default function CartItem({ data }){

  const { cartItem, setCartItem } = useContext(AppContext);

  const { id, title, thumbnail , price } = data;

  const handleRemoveItem = ()=>{
    const updateItems = cartItem.filter((item)=> item.id !== id );

    setCartItem(updateItems);
  };

  return(
    <section className="cart-item" >
      <img src={thumbnail} alt={title} className="cart-item-image"/>
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>
        <button 
          type="button" 
          className="remove-item"
          onClick={handleRemoveItem}
        >
          <BsCartDashFill/>
        </button>
      </div>
    </section>
  );
}

CartItem.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
