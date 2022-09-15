import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAljHkC0srr1t1qL_p2XLdSEen4V5g8wqU",
  authDomain: "final-gb-reactjs-project.firebaseapp.com",
  projectId: "final-gb-reactjs-project",
  storageBucket: "final-gb-reactjs-project.appspot.com",
  messagingSenderId: "861333398120",
  appId: "1:861333398120:web:30c13bd091f82d8dae51dd"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
