import { useState } from "react";
import PropTypes from "prop-types";

const MessageInput = ({ onSendMessage }) => {

    const [inputMessage, setInputMessage] = useState("");

    const sendAndRemoveInput = () => {
        const trimmedMessageText = inputMessage.trim();
        if (trimmedMessageText !== "") {
            onSendMessage(trimmedMessageText);
            setInputMessage("");
        }
    };

    return (
        <div className="inputWrapper">
            <input
                className="input"
                value={inputMessage}
                label="Введите сообщение"
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={({ key }) => {
                    if (key === "Enter") {
                        sendAndRemoveInput();
                    }
                }}

            />
                <button  className="sendButton" onClick={sendAndRemoveInput}>Отправить</button>

        </div>
    );
};

MessageInput.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
};

export default MessageInput;
