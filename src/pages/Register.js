import React from "react";

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
                    <input type='file' id = "file" style={{display: "none"}}></input>
                    <label htmlFor="file">
                        <image src="" alt="Аватарка"></image>
                    </label>
                    <button>Зарегистрироваться </button>
                </form>
                <p>Уже зарегистрированы? Вход</p>
            </div>
        </div>
    );
};
export default Register;