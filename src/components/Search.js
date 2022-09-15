import React from "react";
import Cat from "../img/lloyd-henneman-mBRfYA0dYYE-unsplash.jpg"
import {Avatar, Input}from "@mui/material";
import * as PropTypes from "prop-types";

function StyledBadge(props) {
    return null;
}

StyledBadge.propTypes = {
    overlap: PropTypes.string,
    variant: PropTypes.string,
    anchorOrigin: PropTypes.shape({horizontal: PropTypes.string, vertical: PropTypes.string}),
    children: PropTypes.node
};
const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
            <Input style= {{
                display : "flex",
                background :"yellowgreen",
                color : "white"
            }} type="search" multiLine={false} placeholder='Найти участника чата'></Input>

            </div>
                <div className="userChat" >

                    <Avatar  src={Cat}  alt = "ChatBot"/>
                    <div className="userChatInfo" style={{borderBottom : "1px solid white"}}>
                                <span>ChatBot</span>
                    </div>
                </div>
        </div>

    );
}

export default Search;