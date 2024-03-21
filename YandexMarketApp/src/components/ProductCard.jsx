import React from 'react';
import small_picture from '../images/small-pictures.png';
import product_picture from '../images/product_picture.png'
import dragon_image from '../images/dragon.png'
import classes from './modules/ProductCard.module.css';
import Product from './Product';
import Basement from './Basement';

const ProductCard = function() {

  return (
      <div>
        <div class={classes.types_description}>
          <div className={classes.type}></div>
          <div className={classes.type}></div>
          <div className={classes.type}></div>
        </div>
        <div className={classes.about_product}>
          <div className={classes.mini_pictures}>
              <div className={classes.mini_picture}><img src={small_picture} /></div>
              <div className={classes.mini_picture}><img src={small_picture} /></div>
              <div className={classes.mini_picture}><img src={small_picture} /></div>
              <div className={classes.mini_picture}><img src={small_picture} /></div>
            </div>
            <div className={classes.image_of_product}><img src={product_picture}  /></div>
              <div className={classes.mini_description_of_product}></div>
              <div className={classes.colum}>
                <div className={classes.product_price}></div>
                <div className={classes.dragon}><img src={dragon_image} /></div>
              </div>
            </div>


          <div className={classes.interesting}>
            <p className={classes.may_be_interesting}>Может быть интересно</p>
            <div className={classes.product_feed}>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
            <div className={classes.product_feed}>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>

            <div className={classes.all_product_description}></div>
            <div className={classes.product_characteristic}></div>
            <div className={classes.review}>
              <div className={classes.grade}></div>
              <div className={classes.all_review}></div>
            </div>
          </div>
  );
}

export default ProductCard;
