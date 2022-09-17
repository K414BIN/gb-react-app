import React, {useContext} from "react";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import InputMessage from "./InputMessage";
import {ChatContext} from "../context/ChatContext";

const Chat = () => {
    const { data } = useContext(ChatContext);

    return (
        <div className="chat">
            <div className="chatInfo">
                      <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                    <img src={Add} alt=""></img>
                    <img src={More} alt=""></img>
                </div>
            </div>
            <Messages></Messages>
            <InputMessage></InputMessage>
        </div>
    );
}

export default Chat;