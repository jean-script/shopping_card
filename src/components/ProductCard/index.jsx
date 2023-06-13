import React, { useContext } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrecy';
import propTypes from 'prop-types';

import './styles.css';
import AppContext from '../../context/AppContext';

function ProductCard({ data }){

  const { cartItem, setCartItem } = useContext(AppContext);
  const { title, thumbnail , price } = data;

  const handleAddCart = ()=> setCartItem([...cartItem, data]);

  return(
    <section className="product-card">
      <img 
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} 
        alt="" 
        className="card__image" 
      />
      <div className="card__info">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button 
        type="button" 
        className="card__add-card"
        onClick={handleAddCart}
      >
        <BsFillCartPlusFill/>
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
