import React, {useState} from "react";
import {Avatar, Button} from "@mui/material";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth, db, storage} from "../firebase/firebase";
import { getDownloadURL,ref,uploadBytesResumable } from 'firebase/storage';
import {doc ,setDoc } from "firebase/firestore";
import {Link, useNavigate} from "react-router-dom";


const Register = () => {

    const [error,setError] = useState(false);
    const navigate = useNavigate();

    const  handleSubmit = async (event) => {
        event.preventDefault();
        const displayName = event.target[0].value;
        const email = event.target[1].value;
        const password = event.target[2].value;
        const file = event.target[3].files[0];

        try
        {
            const response = await createUserWithEmailAndPassword(auth, email, password);
             console.log(response.user)
            const storageRef = ref(storage,displayName);
            const uploadTask = uploadBytesResumable(storageRef,file);
             uploadTask.on(( ) => {
                 setError(true);
                              },
                 () => {
                     getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                         await updateProfile(response.user, {
                             displayName,
                             photoURL: downloadURL
                         });
                     await setDoc(doc(db, "users", response.user.uid), {
                         uid: response.user.uid,
                         displayName,
                         email,
                         photoUrl: downloadURL
                     });
                     await setDoc(doc(db,"userChats",response.user.uid),{});
                     navigate("/");
                 });
            });
            
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
                <span className='title'>Страница регистрации </span>
                <form onSubmit={handleSubmit}>
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
                    {error && <span>Что-то пошло не так...</span>}
                </form>
                <p>Уже зарегистрированы? <Link to="/login">Вход</Link></p>
            </div>
        </div>
    );
};
export default Register;