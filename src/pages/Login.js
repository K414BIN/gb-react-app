import React from "react";
import {Avatar} from "@mui/material";


const Login = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Чаты</span>
                <span className='title'>Страница входа</span>
                <form>

                    <input type='email' placeholder='e-mail'></input>
                    <input type='password' placeholder='пароль'></input>
                    <button>Войти </button>
                </form>
                <p>Нет регистрации? Регистрация </p>
            </div>
        </div>
    );
};
export default Login;