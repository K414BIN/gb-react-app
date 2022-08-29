import './App.css';
import Routed from './Routing/routed';
import {useCallback, useEffect, useState} from "react";
import MessageInput from "./Chat/MessageInput";
import MessageList from "./Chat/MessageList";

function App () {

    const [inputMessage,setInputMessage] = useState("");
    const [messagesArray,setMessagesArray] = useState([]);
    const trimmedMessageText = inputMessage.trim();
    const onSendMessage = useCallback( () => {

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
        <div className="App">
            <Routed />
            <MessageInput inputMessage={trimmedMessageText}  setInputMessage={messagesArray} sendAndRemoveInput={onSendMessage} ></MessageInput>
            <MessageList messagesArray={messagesArray}></MessageList>
        </div>
    );
}


export default App;
