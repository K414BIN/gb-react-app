import { makeStyles } from '@mui/styles';
import PropTypes from "prop-types";


const useStyles = makeStyles(() => ({
  messageList: {
    width: "100%",
    height: "90%",
    borderBottom: "1px solid black",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
  },
  message: {
    backgroundColor: "#A1A1A1",
    padding: "5px",
    margin: "10px 5px",
    borderRadius: "30px",
  },
}));

const MessageList = ({ messagesArray }) => {
  const classes = useStyles();

  return (
    <div className={classes.messageList}>
      {messagesArray.map((message, i) => (
        <div
          key={i}
          className={classes.message}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
};

MessageList.propTypes = {
  messagesArray: PropTypes.array.isRequired,
};

export default MessageList;
