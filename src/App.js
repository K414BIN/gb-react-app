import * as React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import "./App.css";
import {useCallback, useEffect, useState} from "react";
import MessageList from "./Chat/MessageList";
import MessageInput from "./Chat/MessageInput";


function App() {

    const [inputMessage,setInputMessage] = useState("");
    const [messagesArray,setMessagesArray] = useState([]);

    const onSendMessage = useCallback( () => {
        const trimmedMessageText = inputMessage.trim();
        if  (trimmedMessageText !=="") {
            setMessagesArray((prev) => [...prev,{
                trimmedMessageText,
                author: "user"
            }]);
            setInputMessage("");
        }}, [inputMessage]);

    useEffect(() => {
        if (messagesArray.length > 0) {
            setTimeout(() => {
                console.log("Message was sent");
            }, 1500);
        }
    }, [messagesArray]);

    return (
        <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/chats" element={<Chats />} />
            <Route path=":chatID" element={<Navigate replace to="/chats" />} />
        </Routes>
    );
}

function Messages ( {messagesArray, trimmedMessageText,  onSendMessage}) {
    return (
            <>
                {/* Ошибка при передаче параметров в функцию - undefined messagesArray  */}
                {/* и map не может работать с таким объектом.  */}
                { /* <MessageList messagesArray={messagesArray}></MessageList>*/}

              <MessageInput inputMessage={trimmedMessageText}  setInputMessage={messagesArray} sendAndRemoveInput={onSendMessage} ></MessageInput>
            </>
    )
}

function Home() {
    return (
        <>
            <main>
                <h2 className="text-3xl font-bold underline">Welcome to the homepage!</h2>
            </main>
            <nav>
                <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                    <Link to={"/chats"}>Chats</Link>
                    <Link to={"/profile"}>Profile</Link>
                </div>
            </nav>
        </>
    );
}

function Chats() {
    return (
        <>
            <main>
            <h2 className="text-3xl font-bold underline">The page of chats.</h2>
            <nav>
                <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <Link to={"/home"}>Home</Link>
                <Link to={'/chats/chat1'}>Chat1</Link>
                <Link to={'/chats/chat2'}>Chat2</Link>
                </div>
            </nav>

                <Messages />

            </main>
        </>
    );
}

function Profile() {
    return (
            <>
            <main>
                <h2 className="text-3xl font-bold underline">The profile page.</h2>
            </main>
                <nav>
                    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                        <Link to={"/home"}>Home</Link>
                        <Link to={"/chats"}>Chats</Link>
                    </div>
                </nav>
            </>
    )
}

export default App;