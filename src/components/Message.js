import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { Send } from '@material-ui/icons';
import classes from "*.module.scss";

const useStyles = makeStyles(() => ({
    input: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 300,
        width: '90%',
        margin: '0 15px 15px 15px',
    },
    sendButton: {
        margin: "0px 10px",
    },
}));

function Message (props)
{
    return (
        <Button variant ="contained" color = "primary" className ={classes} >
            Отправить
        </Button>
    );
}

export default Message;