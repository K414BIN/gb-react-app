
import './App.css';
import React, { useState, useEffect,useCallback, useRef } from 'react';

function App() {
        
    const [inputMessage,setInputMessage] = useState("");
    
    const [messagesArray,setMessagesArray] = useState([]);
    
    const onSendMessage = useCallback( () => {
        setMessagesArray((prev) => [...prev,inputMessage]);        
        setInputMessage("");        
    }, [inputMessage]);
    
   useEffect (() => {
       if (messagesArray.length > 0 ) {console.log("Message was sent!");}
     
   },[messagesArray]);    
    
  return (
    <div className="App">

      <div className="mainWrapper">
  
      <div className = "messageList">
      {messagesArray.map((message,i) => (
        <div key = {i} >
        <span className = "message"> {message} </span>
        </div>
        ))}
      </div>
      <div className = "inputWrapper">
        <
            input className = "input" value = {inputMessage} onChange = {(e) => setInputMessage(e.target.value)}
            onKeyDown = {({key}) => {
                if (key === 'Enter') {
                 
                    onSendMessage();                
        }}}/>;
    
      <button onClick={onSendMessage}>Отправить</button>
      </div>
      </div>
  
    </div>
  );
}

export default App;
