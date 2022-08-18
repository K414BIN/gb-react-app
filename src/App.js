import './App.css';
import React, { useState, useEffect,useCallback } from 'react';

function App() {
        
    const [inputMessage,setInputMessage] = useState("");
    
    const [messagesArray,setMessagesArray] = useState([]);
    
    const onSendMessage = useCallback( () => {
        setMessagesArray((prev) => [...prev,inputMessage]);     /* Не смог добавить автора сообщения */   
        setInputMessage("");     
    }, [inputMessage]);
     
    useEffect(() => {
    const chatBotTimeout = setTimeout(() => {                   
          console.log("Chat-Bot answer...");          /* Я не смог ввести ответ в input, не разобрался как */
    }, 1500);
    return () => clearTimeout(chatBotTimeout);
  }, [messagesArray]);

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
      Введите сообщение >>
        <
            input className = "input"             
            value = {inputMessage} onChange = {(e) => setInputMessage(e.target.value)}
            onKeyDown = {({key}) => {
                if (key === 'Enter') {                 
                    onSendMessage();                
        }}}/>
    
      <button onClick={onSendMessage}>Отправить</button>
      </div>
      </div>
  
    </div>
  );
}

export default App;
