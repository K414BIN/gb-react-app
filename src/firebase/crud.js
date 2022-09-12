import {collection, getDocs,addDoc,doc } from "firebase/firestore";
import { firestore } from "./firebase";

//функция для добавление нового поста в коллекцию
export const addPost = async(data) =>{
    const result = addDoc(collection(firestore,'posts'),data)
}

//функция для загрузки постов и возврата в виде промиса
export const getAllPosts = async() =>{
    const response = await getDocs(collection(firestore,'posts')) 
    console.log(response)
    const arr = response.docs.map(e => e.data())
    return arr
}
