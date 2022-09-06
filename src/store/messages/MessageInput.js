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
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        >
        </input>
        <button type="submit"
                onClick={sendAndRemoveInput}
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Отправить
        </button>
    </div>
    );
};

export default MessageInput;
