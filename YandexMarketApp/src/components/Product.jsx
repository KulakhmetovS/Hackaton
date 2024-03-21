import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Form from './Form';
import ProductCard from './ProductCard';
import Basement from './Basement';
import product_image from '../images/Product.png';
import classes from './modules/Product.module.css';

const form = () => {
  ReactDOM.render(<Form />, document.getElementById('App'));
}

const CardOfProduct =() => {
  ReactDOM.render(
    <div>
    <Header onClich={form} />
    <ProductCard onClich={CardOfProduct}/>
    <Basement />
    </div>,
    document.getElementById('App'));
}

const Product = function(props) {

  return (
    <div className={classes.product} onClick={CardOfProduct} id="product">
      <div className={classes.image_of_product}><img src={product_image} width="242" height="242" /></div>
      <p className={classes.name_of_product}>Tessdgsdfgdsfgdfgfd</p>
      <p className={classes.product_price}>1331 ₽</p>
    </div>
  );
}

export default Product;
