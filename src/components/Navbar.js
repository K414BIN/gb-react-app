import React,{useContext} from "react";
import {signOut} from "firebase/auth";
import {Avatar, Button} from "@mui/material";
import Cat from "../img/lloyd-henneman-mBRfYA0dYYE-unsplash.jpg"
import {auth} from "../firebase/firebase";
import {AuthContext} from "../context/AuthContext";

const Navbar = () => {
    const {currentUser} = useContext(AuthContext);

    return (
        <div className="navbar">
        <span className="logo"  style={{color : "red"}} > K414BIN ChAT</span>
            <Button onClick={()=>signOut(auth)} variant="contained" color="secondary" size="small" fontSize = "small">Выйти</Button>
            <div className="user">
                <Avatar  src={currentUser.photoURL} style={{color : "red"}} alt = {currentUser.displayName}/>
                <span> {currentUser.displayName}</span>

            </div>
        </div>

    );
}

export default Navbar;