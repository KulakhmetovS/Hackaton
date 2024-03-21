import React from 'react';
import Product from './Product'
import dragonImg from '../images/dragon.png'
import classes from './modules/Products.module.css';

const Products = function(props) {

  return (
    <div>

    <div className={classes.image}>
      <div className={classes.dragon}><img src={dragonImg} /></div>
    </div>

    <div className={classes.price}>
      <div className={classes.left_from_filter}>
        <div className={classes.product_feed_1}>
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
        <div className={classes.product_feed_2}>
          <Product />
          <Product />
          <Product />
          <Product />
       </div>
    </div>
    <div className={classes.filter_container}>
     <div className={classes.filter}>
       <div className={classes.drop_down_menu}>
         <button className={classes.dropbotton}>Цена</button>
         <div className={classes.dropdown_content}>
           <li>Оценка</li>
           <li>Популярные</li>
           <li>Новинки</li>
           <li>Выгодные</li>
         </div>
       </div>
    </div>
    </div>
    </div>

        <div className={classes.product_feed_3}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
       </div>
       <div className={classes.product_feed_4}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
       </div>
     </div>

  );
}

export default Products;
