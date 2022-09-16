import React,{useContext,useEffect,useState} from "react";
import {Avatar} from "@mui/material";
import {doc , onSnapshot } from "firebase/firestore";
import {ChatContext} from "../context/ChatContext";
import {AuthContext} from "../context/AuthContext";
import {db} from "../firebase/firebase";


const Chats = () => {
    const {currentUser} = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);
    const [chats, setChats] = useState([]);

    useEffect(() =>{
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data());
            });
            return () => {
                unsub();
            }
        }

            currentUser.uid && getChats();
        },[currentUser.uid]);

    const handleSelect = (u) => {
        dispatch({type :"CHANGE_USER",payload: u})
    }


    return (
        <div className="chats">
            {Object.entries(chats)?.sort((a,b)=> b[1].date - a[1].date).map ((chat) =>(
            <div className="userChat" key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
                <Avatar sx={{ width: 24, height: 24 }} src={chat[1].userInfo.photoURL} alt={chat[1].userInfo.displayName}/>
                <div className="userChatInfo"  style={{color: 'white'}}>
                    <span>{chat[1].userInfo.displayName}</span>
                    <p>{chat[1].userInfo.lastMessage?.text}</p>
                </div>
            </div>
            ))}
        </div>
            );
};

export default Chats;