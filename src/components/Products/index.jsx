import React, { useEffect, useContext } from 'react';
import ProductCard from '../ProductCard';

import Loading from '../Loading';
import fetchProducts from '../../api/fetchProducts';

import './styles.css';
import AppContext from '../../context/AppContext';

function Products(){

  const { products, setProducts, loading, setLoading } = useContext(AppContext);
  
  useEffect(()=>{
    fetchProducts('iphone')
      .then((res)=>{
        setProducts(res);
        setLoading(false);
      })
      .catch(()=>{
        setLoading(false);
      });
  },[]);

  return(
    (loading && <Loading/> )  || (
      <section className="products container">
        {products.map((product)=> <ProductCard  key={product.id} data={product} />)}
      </section>
    )
  );
}

export default Products;
