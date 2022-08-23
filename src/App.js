import  {useEffect, useState} from 'react';
import './App.css';
import Message from "./components/Message";
import MessageList from './components/MessageList';

function App() {

    const [inputMessage, setInputMessage] = useState('');
    const [messagesArray, setMessagesArray] = useState([]);

    const onSendMessage = () => {
        const trimmedMessageText = inputMessage.trim();

        if (trimmedMessageText !== '') {
            setMessagesArray(prev => [...prev,
                {
                    trimmedMessageText,
                    author: "user",
                    time: new Date().toLocaleString()
                },
            ]);
            setInputMessage('');
        };
    };

    useEffect(() => {
        const isMessageFromBot = inputMessage.author === 'Chat-bot';
        if (messagesArray.length > 0 && isMessageFromBot) {
            setTimeout(() => {

                    setMessagesArray(prev => [...prev,
                        {
                            inputMessage: 'Сообщение отправлено!',
                            author: 'Chat-bot',
                            time: new Date().toLocaleString()
                        },
                    ]);
                    setInputMessage('');
                }, 1500);
        };
        }, [ inputMessage, messagesArray]);

  return  (
        <div  className="App">
           <div className="mainWrapper">
                  <MessageList messagesArray={messagesArray}  />
                  <Message inputMessage={inputMessage} setInputMessage={setInputMessage} onSendMessage={onSendMessage}> </Message>
           </div>
        </div>
  );
}

export default App;