import PropTypes from "prop-types";

const MessageList = ({ messagesArray }) => {

    return (
        <div className="messageList">
            {messagesArray.map((message, i) => (
                <div key={i}>
                    <span className="message"> {message} </span>
                </div>
            ))}
        </div>
    )
}

MessageList.propTypes = {
    messagesArray: PropTypes.array.isRequired,
};

export default MessageList;
