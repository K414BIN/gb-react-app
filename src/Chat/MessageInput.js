import {useState} from "react";

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
                type = 'text'
                label="Введите сообщение"
                autoFocus={true}
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

export default MessageInput;
