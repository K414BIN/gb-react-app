import * as React from "react";
import {Routes, Route, Link, useParams} from "react-router-dom";
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
            setMessagesArray((prev) => [...prev,trimmedMessageText]);
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

        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="chats" element={<About />} />

            <Route path=":chatID" element={<Chats />}>

            </Route>

        </Routes>
          <div className="chatWrapper">

              <MessageList messagesArray={messagesArray} />
              <MessageInput onSendMessage={onSendMessage} />
          </div>
      </div>
  );
}
function Home() {
  return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>Follow to chats</p>
        </main>
        <nav>
          <Link to="/chats">Chats</Link>
        </nav>
      </>
  );
}

function About() {
  return (
      <>
        <main>
          <h2>Who are you?</h2>
          <p>
            Please, enter your name, surname for profile:
          </p>
        </main>
        <nav>
            <Link to={'/chats/chat1'}>Chat1</Link>
            <Link to={'/chats/chat2'}>Chat2</Link>
            <Link to="/">Home</Link>
        </nav>
      </>
  );
}

const Chats = () => {

  const {chatID} = useParams();
  console.log(chatID);

  const [chats,setChats]= useState([
    {
      id:'chat1',
      messages:["сообщение №1"]
    },
    {
      id:'chat2',
      messages: ["сообщение №1","сообщение №2","сообщение №3"]
    },
  ])

    const id = chats.findIndex( x => x.id === chatID);

    return (
        <>
          <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/chats/chat1'}>Chat1</Link>
            <Link to={'/chats/chat2'}>Chat2</Link>
          </nav>
          <main style={{height: '50vh', background:'#51AFE',width:'100%'  }  } >
            <h1>Chats</h1>
            <div>
              {
                chatID && chats[id]?.messages.map(e => <h2>{e}</h2>)
              }
            </div>

          </main>
        </>
    )

}
export default App;