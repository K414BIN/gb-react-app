import React from "react";
import {Avatar, Button} from "@mui/material";

const Navbar = () => {
    return (
        <div className="navbar">
        <span className="logo"> K414BIN CHAT</span>
            <div className="user">
                <Avatar  style={{color : "red"}} />
                <Button  variant="contained" color="primary" size="small" fontSize = "small">Выйти</Button>
            </div>
        </div>

    );
}

export default Navbar;