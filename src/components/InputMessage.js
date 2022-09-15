import React from "react";
import {Button, Input} from "@mui/material";

const InputMessage = () => {
    return (
        <div className="inputMessage">
            <Input type="text" multiLine={true} rows={2} autoFocus={true} fullWidth={true} placeholder='Введите сообщение здесь...'/>

        <div className="send">
            <Button variant="contained" color="primary" size="small" fontSize = "small">Отправить</Button>
        </div>
        </div>
    );
}

export default InputMessage;