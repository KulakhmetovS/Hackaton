import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import logo from '../images/Yandex.png';
import classes from './modules/Header.module.css';

const Header = function() {


  return (
    <div id={classes.content}>
    <div className={classes.header}>
        <div className={classes.logo}><img src={logo} /></div>
        <div className={classes.search}><input type="text" name="search_form" className={classes.search_bar} id="inputId"></input></div>
        <div className={classes.menu}>
          <button></button>
          <a href='/Main'><button></button></a>
          <a href='/ProductCard'><button></button></a>
          <a href='/form'><button id={classes.log_in}>Войти</button></a>
        </div>
    </div>
    </div>
  );
}

export default Header;
