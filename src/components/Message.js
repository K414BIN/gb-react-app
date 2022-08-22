import Button from '@mui/material/Button';
import {TextField} from "@mui/material";
import classes from "../styles/Message.scss";
import sendButtonImg from '../styles/send_message.svg';

export default function Message({ inputMessage ,setInputMessage, onSendMessage}) {

    return (
        <div className="inputWrapper">
             <TextField

            id="standard-multiline-flexible"
            label="Введите сообщение..."
            multiline
            maxRows={3}
            className='input'
            autoFocus={true}
            required value = {inputMessage} onChange = {(e) => setInputMessage(e.target.value)}
            onKeyDown={({ key }) => {
                if (key === 'Enter') {
                    onSendMessage();
                }
            }}
            >
         </TextField>
        <Button className={classes.sendButton}>
            <img src={sendButtonImg} alt="send-message" />
        </Button>
         </div>
    )
}
