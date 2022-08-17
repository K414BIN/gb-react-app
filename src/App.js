import InputComponent from './InputComponent';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
    
    const [inputMessage,setInputMessage] = useState("");
    const [messagesArray,setMessagesArray] = useState([]);
    const onSendMessage = () => {
        setMessagesArray((prev) => [...prev,inputMessage]);
        setInputMessage("");
    };
    
    useEffect (() => {
        window.addEventListener("keypress",({key}) => {
            if (key == "Enter" ) {
            onSendMessage();                  
    }});
    },[onSendMessage]);
    
    
  return (
    <div className="App">

      <div className="mainWrapper" style ={{
                                            width: 300,
                                            height: 200,
                                            color: 'yellow',                                     
                                            display: 'block',
                                            }}>
  
      <div className = "messageList">
      {messagesArray.map((message,i) => (
        <div key = {i} > {message} </div>
        ))}
      </div>
      <div className = "InputWrapper">
      <InputComponent value = {inputMessage} onChange = {setInputMessage} />
      <button onClick={onSendMessage}>Отправить</button>
      </div>
      </div>

    </div>
  );
}

export default App;
