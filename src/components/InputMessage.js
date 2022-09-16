import React, {useContext, useState} from "react";
import {Button, Input} from "@mui/material";
import {ChatContext} from "../context/ChatContext";
import {AuthContext} from "../context/AuthContext";
import {updateDoc, doc, arrayUnion, serverTimestamp} from "firebase/firestore";
import {db} from "../firebase/firebase";
import { v4 as uuid } from 'uuid';

const InputMessage = () => {

    const [text, setText] = useState("");
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const handleSend = async () => {
        await updateDoc(doc(db,"chats",data.chatId),{
            messages: arrayUnion({
                id: uuid(),
                text,
                senderId : currentUser.uid,
                author: currentUser.displayName,
                date: serverTimestamp(),
            })
        })

        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        })
        setText('');
    }


    return (
        <div className="inputMessage">
            <Input onChange={ (e)=> setText(e.target.value)} value={text} type="text"  rows={2} autoFocus={true} fullWidth={true} placeholder='Введите сообщение здесь...'/>
         <div className="send">
            <Button variant="contained" color="primary" size="small" fontSize = "small" onClick={handleSend}>Отправить</Button>
        </div>
        </div>
    );
}

export default InputMessage;