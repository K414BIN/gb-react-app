import React, {useContext, useState} from "react";
import {Button, Input} from "@mui/material";
import {ChatContext} from "../context/ChatContext";
import {AuthContext} from "../context/AuthContext";
import {updateDoc, doc, arrayUnion} from "firebase/firestore";
import {db} from "../firebase/firebase";
import { v4 as uuid } from 'uuid';

const InputMessage = () => {
    const {data} = useContext(ChatContext);
    const {currentUser} = useContext(AuthContext);
    const [text, setText] = useState('');

    const handleSend = async () => {
        await updateDoc(doc(db,"chats",data.chatId),{
            messages: arrayUnion({
                id: uuid(),
                text,
                senderId : currentUser.uid,
                author: currentUser.displayName,
                date: new Date().toLocaleString()
            })
        })
        setText('');
    }


    return (
        <div className="inputMessage">
            <Input onChange={e => setText(e.target.value)} type="text"  rows={2} autoFocus={true} fullWidth={true} placeholder='Введите сообщение здесь...'/>
         <div className="send">
            <Button variant="contained" color="primary" size="small" fontSize = "small" onClick={handleSend}>Отправить</Button>
        </div>
        </div>
    );
}

export default InputMessage;