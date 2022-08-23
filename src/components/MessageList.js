import { makeStyles } from '@mui/styles';
import PropTypes from "prop-types";
import { ListItem } from '@mui/material';

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
  text: {
    color : "black",
  },
}));

const MessageList = ({ messagesArray }) => {
  const classes = useStyles();

  return (
    <div className={classes.messageList}>

      {messagesArray.map((message, i) => (
        <ListItem
          key={i}
          className={classes.message}
        >
          {message.text}
        </ListItem>
      ))}
    </div>
  );
};

MessageList.propTypes = {
  messagesArray: PropTypes.array.isRequired,
};

export default MessageList;
