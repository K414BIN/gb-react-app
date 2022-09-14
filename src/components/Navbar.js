import React from "react";
import {Avatar, Button} from "@mui/material";
import Cat from "../img/lloyd-henneman-mBRfYA0dYYE-unsplash.jpg"
const Navbar = () => {
    return (
        <div className="navbar">
        <span className="logo"  style={{color : "red"}} > K414BIN ChAT</span>
            <Button  variant="contained" color="secondary" size="small" fontSize = "small">Выйти</Button>
            <div className="user">
                <Avatar  src={Cat} style={{color : "red"}} alt = "ChatBot"/>
            </div>
        </div>

    );
}

export default Navbar;