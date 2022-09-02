import {useCallback, useState} from "react";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";
import {AUTHORS} from "./actions";

export const MessageList = ({ messagesArray }) => {
    const profileName = useSelector(state => state.profile.name);

    const renderMessage = useCallback((message, i) => (
        <div key={i}>
                    <span>
                        {message.author === AUTHORS.ME ? profileName : message.author}:
                    </span>
            <span>{message.text}</span>
        </div>
    ), [profileName]);

    return (
        <div className="messageList">
            {messagesArray.map((message, i) => (
                <div key={i}>
                    { message}
                </div>
            ))}
        </div>
    )
}

MessageList.propTypes = {
    messagesArray: PropTypes.array.isRequired,
};



