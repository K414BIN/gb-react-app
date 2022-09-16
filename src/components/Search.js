import React, {useContext, useState} from "react";

import {Avatar, Input}from "@mui/material";
import * as PropTypes from "prop-types";
import {updateDoc, where, query, collection, getDocs, setDoc, serverTimestamp, doc} from "firebase/firestore";
import {db} from "../firebase/firebase";
import {AuthContext} from "../context/AuthContext";
import {updateProfile} from "firebase/auth";

const Search = () => {

    const {currentUser} = useContext(AuthContext);
    const [user, setUser] = useState('');
    const [username, setUsername] = useState(null);
    const [error ,setError] = useState(false);

    const handleSearch = async () => {

        const q = query(collection(db, 'users'), where('displayName', '==', username))
        try {
            const querySnapShot = await getDocs(q);
            querySnapShot.forEach((doc) => {
                setUser(doc.data());
            });
        }   catch (error) {
            setError(true);
        }
    }

    const handleKey = (e) => {
        e.code === "Enter" && handleSearch()
    }

  const handleSelect = async () => {
        const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
        try {
            const res = await getDocs(doc(db,"chats",combinedId));
            if (!res.exists()) {
                await  setDoc(doc(db,"chats",combinedId),{messages : []});

                await updateDoc(doc(db,"userChats",user.uid),{
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoUrl
                    },
                    [combinedId + ".date"] : serverTimestamp()
                })
                await updateDoc(doc(db,"userChats",currentUser.uid),{
                    [combinedId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoUrl
                    },
                    [combinedId + ".date"] : serverTimestamp()
                })
            }
        }
        catch (e) {

        }
  }

    return (
        <div className="search">
            <div className="searchForm">
            <Input style= {{
                display : "flex",
                background :"yellowgreen",
                color : "white"
            }} type="search" onChange ={e=>setUsername(e.target.value)}  onKeyDown = {handleKey} placeholder='Найти участника чата'></Input>

            </div>
            {error && <span>Нет такого пользователя! </span>}
            {user && <div className="userChat" onClick={handleSelect}>
                    <Avatar  src={user.photoURL} alt = {user.displayName}/>
                    <div className="userChatInfo" style={{borderBottom : "1px solid white"}}>
                                <span>{user.displayName}</span>
                    </div>
                </div>}
        </div>

    );
}

export default Search;