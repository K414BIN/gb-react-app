import {useState} from "react";
import {Link,  useParams} from "react-router-dom";
import {AUTHORS} from "../messages/actions";
import {MessageList} from "../messages";
import * as PropTypes from "prop-types";


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

    const [chats, setChats] = useState(initialChats);

    return (
        <>
        <div>
            <h2>Chats</h2>
            <ChatList chats={chats} />
            {/* Все равно не работает!
              <MessageList messagesArray={chats} />*/}

        </div>
        </>
    );
}

const ChatList = ({ chats, chatId }) => (
    <div>
        {Object.keys(chats).map((id, i) => (
            <div key={i}>
                <Link to={`/chats/${id}`}>
                    <b style={{ color: id === chatId ? "#000000" : "grey" }}>
                        {chats[id].name}
                    </b>
                </Link>
            </div>
        ))}
    </div>
);

ChatList.propTypes = {
    chatId: PropTypes.string,
    chats: PropTypes.shape({
        id2: PropTypes.shape({name: PropTypes.string, messages: PropTypes.any}),
        id1: PropTypes.shape({name: PropTypes.string, messages: PropTypes.any})
    })
};
