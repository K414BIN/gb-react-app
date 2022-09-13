import { initializeApp } from "firebase/app";
//Добавлено
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAgv7E70dkWC0YIOr98iPPtn6LeLowxDLI",
  authDomain: "geekbrains-univer-reactjs-app.firebaseapp.com",
  projectId: "geekbrains-univer-reactjs-app",
  storageBucket: "geekbrains-univer-reactjs-app.appspot.com",
  messagingSenderId: "319570720543",
  appId: "1:319570720543:web:25126d78bc38c27184622a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//Модули используемые в проекте(аутентификация и firestore)
export const firestore  = getFirestore(app)
export const auth = getAuth(app)
