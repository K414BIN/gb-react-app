import {useState} from "react";
import {AUTHORS} from "../messages/actions";
import ChatList from "./ChatList";
import {useParams} from "react-router-dom";
import {MessagesList} from "../messages/MessagesList";


const initialChats = [{
    id1: {
        name: "Chat1",
        messages: [{ text: "FirstMessage", author: AUTHORS.BOT }],
    },
    id2: {
        name: "Chat2",
        messages: [{ text: "FirstMessageHereToo!", author: AUTHORS.ME }],
    },
}];

export default function Chats() {
const { chatId } = useParams();

const [chats, setChats] = useState(initialChats);

if (!chats[chatId]) {
    return null
}

    return (
        <>
            <div>
              <div>
                     <h2>Chats</h2>
                    <ChatList chats={chats} chatId={chatId} />
              </div>
              <div>
                    <MessagesList messagesArray={chats[chatId].messages}/>
              </div>
            </div>
        </>
    );
}
