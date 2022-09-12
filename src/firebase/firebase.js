
import { initializeApp } from "firebase/app";
//Добавлено
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Конфиг файрбейс, создается при создании проекта в самой файрбейс
const firebaseConfig = {
  apiKey: "AIzaSyD1P89wz2mevt0TjWQ7O9gk2Oq40i2Cl2k",
  authDomain: "gb-samble.firebaseapp.com",
  projectId: "gb-samble",
  storageBucket: "gb-samble.appspot.com",
  messagingSenderId: "695882507589",
  appId: "1:695882507589:web:bca6df789fb224fe660a2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Модули используемые в проекте(аутентификация и firestore)
export const firestore  = getFirestore(app)
export const auth = getAuth(app)
