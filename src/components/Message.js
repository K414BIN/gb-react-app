import React, {useContext, useEffect, useRef} from "react";
import {AuthContext} from "../context/AuthContext";
import {ChatContext} from "../context/ChatContext";


const Message = ({message}) => {
    const ref = useRef();
    const {currentUser} = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    useEffect( () =>{
            ref.current?.scrollIntoView({behavior:"smooth"})
    },[message]);

    return (
        <div ref={ref} className={`message ${message.senderId === currentUser.uid && "owner"}`}>
            <div className="messageInfo">
              <img alt="" src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} ></img>

              <span>{currentUser.displayName}</span>
            </div>
            <div className="messageContent">
            <p>{message.text}</p>
            </div>
        </div>

    );
}

export default Message;