import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {addChat} from "../chat/actions";
import {getChatList} from "../chat/selectors";
import {addMessage, AUTHORS} from "./actions";
import MessageField from "./MessageField";
import ChatList from "../chat/ChatList";
import * as PropTypes from "prop-types";

function Redirect(props) {
    return null;
}

Redirect.propTypes = {to: PropTypes.string};

const MessageFieldContainer = () => {

    const addMessageWithThunk = (chatId, message) => (dispatch, getState) => {
        dispatch(addMessage(chatId, message));
        if (message.author !== AUTHORS.BOT) {
            const botMessage = 'Hello, I am Chat-bot!';
            setTimeout(() => dispatch(addMessage(chatId, botMessage)), 2000);
        }
    }

    const {chatId} = useParams();
    const chats = useSelector(getChatList);

    function selectMessageList() {
        return null
    }

    const messageList = useSelector(selectMessageList);
    const dispatch = useDispatch();

    const onAddMessage = useCallback(
        (message) => {
            dispatch(addMessageWithThunk(chatId, message));
        },
        [chatId]
    );

    const onAddChat = useCallback((newChatName) => {
        dispatch(addChat(newChatName));
    }, []);

    if (!chatId) {
        return (
            <>
                <ChatList chats={chats} chatId={} onAddChat={() => {
                }}/>
            </>
        );
    }
    if (!chats[chatId]) {
        return <Redirect to="/nochat"/>;
    }
    return (
        <MessageField
            chatId={chatId}
            messages={messageList[chatId]}
            onAddChat={onAddChat}
            onAddMessage={onAddMessage}
        />
    );
};