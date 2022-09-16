import React, {useContext, useEffect, useState} from "react";
import Message from "./Message";
import {ChatContext} from "../context/ChatContext";
import {doc, onSnapshot} from "firebase/firestore";
import {db} from "../firebase/firebase";

const Messages = () => {
    const { dataChatContext } = useContext(ChatContext);
    const [messages,setMessages] =  useState([]);
    {/*
    console.log(dataChatContext.chatId);
    console.log(dataChatContext.user);

        useEffect(() => {
            const unsub = onSnapshot(doc(db, "chats", dataChatContext.chatId), (doc) => {
                doc.exists() && setMessages(doc.data().messages);
            })
            return () => {
                unsub();
            }
        }, [dataChatContext.chatId])
    */}
    return (
        <div className="messages">
            {messages.map((m)=>(
                <Message message={m} key={m.id}/>
            ))}
        </div>
    );
};

export default Messages;