import React from "react";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Message from "./Message";
import InputMessage from "./InputMessage";

const Chat = () => {
    return (
        <div className="chat">
            <div    className="chatInfo">
            <span>ChatBot</span>
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