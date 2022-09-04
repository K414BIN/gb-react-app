import {Link} from "react-router-dom";
import * as PropTypes from "prop-types";

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

 export default ChatList;