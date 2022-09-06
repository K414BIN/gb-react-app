import {MessagesList} from "./MessagesList";
import ChatList from "../chat/ChatList";
import MessageInput from "./MessageInput";

const MessageField = ({ chatId, messages, onAddMessage, onAddChat }) => (
    <section className="message-field">
        <header className="message-header">Header</header>
        <div className="wrapper">
            <div>
                <ChatList chatId={chatId} onAddChat={onAddChat} />
            </div>
            <div>
                <MessagesList  messagesArray={messages}/>

                <MessageInput onAddMessage={onAddMessage} />
            </div>
        </div>
    </section>
);

export default MessageField;