import React from 'react';
import classes from './modules/Form.module.css';

const Form = () => {
  return (
    <div className={classes.main}>
      <div className={classes.picture}>
      </div>
      <div className={classes.FormContainer}>
        <div className={classes.Form}>
          <div className={classes.LoginText}>Вход в вашу учётую запись</div>
          <form className={classes.data}>
            <input type="text" className={classes.login} placeholder="Почта/Логин" id={classes.inputLigin} />
            <input type="text" className={classes.password} placeholder="Пароль" id={classes.inputPassword} />
            <button className={classes.log_in}>Войти</button>
          </form>
          <button className={classes.register}>Зарегестрироваться</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
