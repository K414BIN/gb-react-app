import React from "react";
import {Avatar, Button, IconButton} from "@mui/material";


const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Чаты</span>
                <span className='title'>Страница регистрации </span>
                <form>
                    <input type='text' placeholder='Тут должно быть имя'></input>
                    <input type='email' placeholder='e-mail'></input>
                    <input type='password' placeholder='пароль'></input>

                    <label htmlFor="file">
                        <Avatar  style={{color : "white"}} />
                    <Button variant="contained" component="label">
                        Загрузить аватарку
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                    </label>
                    <button>Зарегистрироваться </button>
                </form>
                <p>Уже зарегистрированы? Вход</p>
            </div>
        </div>
    );
};
export default Register;