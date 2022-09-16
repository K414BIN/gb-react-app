import React, {useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth, db, storage} from "../firebase/firebase";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {doc, setDoc} from "firebase/firestore";
import { useNavigate , Link} from "react-router-dom";

const Login = () => {

    const [error,setError] = useState(false);
    const navigate = useNavigate();
    const  handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;


        try
        {
            await signInWithEmailAndPassword(auth,email,password)
                navigate("/home");
        }
        catch (error)
        {
            setError(true);
        }
    };

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Чаты</span>
                <span className='title'>Страница входа</span>
                <form onSubmit={handleSubmit}>
                    <input type='email' placeholder='e-mail'></input>
                    <input type='password' placeholder='пароль'></input>
                    <button>Войти </button>
                </form>
                <p>Нет регистрации?<Link to="/register"> Регистрация </Link></p>
                {error && <span>Что-то пошло не так...</span>}
            </div>
        </div>
    );
};
export default Login;