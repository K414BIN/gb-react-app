import React from "react";
import {Avatar} from "@mui/material";
import Cat from "../img/lloyd-henneman-mBRfYA0dYYE-unsplash.jpg";

const Chats = () => {
    return (
        <div className="chats">

            <div className="userChat">
                <Avatar sx={{ width: 24, height: 24 }} src={Cat} alt ="ChatBot"/>
                <div className="userChatInfo"  style={{color: 'white'}}>
                    <p>Hello!</p>
                </div>
            </div>
            <div className="userChat">
                <Avatar sx={{ width: 24, height: 24 }} src={Cat} alt ="ChatBot"/>
                <div className="userChatInfo" style={{color: 'yellow'}}>
                    <p>Hello!</p>
                </div>
            </div>
            <div className="userChat">
                <Avatar sx={{ width: 24, height: 24 }} src={Cat} alt ="ChatBot"/>
                <div className="userChatInfo" style={{color: 'darkgrey'}}>
                    <p>Hello!</p>
                </div>
            </div>
        </div>

    );
}

export default Chats;