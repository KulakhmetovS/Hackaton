import React from 'react';
import classes from './modules/Basement.module.css';


const Products = function() {

  return (
    <div>
    <div className={classes.basement}></div>
    <div className={classes.basement_1}></div>
      <div className={classes.basement_2}>
        <div className={classes.user_agreement}>Пользовательское соглашение</div>
        <div className={classes.copyright}> © ООО “ЯНДЕКС”</div>
        <div className={classes.project}>Проект компании Яндекс</div>
      </div>
    </div>
  );
}

export default Products;
