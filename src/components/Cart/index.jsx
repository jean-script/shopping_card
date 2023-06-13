import React, { useContext } from 'react';

import './styles.css';
import CartItem from '../CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrecy';

function Cart(){

  const { cartItem, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItem.reduce((acc, item )=>{
    return item.price + acc;
  }, 0);

  return(
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}` }>
      <div className="cart-items">
        {cartItem.map((cartItem)=> <CartItem key={cartItem.id} data={cartItem}/>)}
      </div>

      <div className="cart-resume">{ formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
}

export default Cart;
