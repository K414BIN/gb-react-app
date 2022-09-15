import React from "react";
import Cat2 from "../img/alex-nicolopoulos-hxn2HjZHyQE-unsplash.jpg";
import Cat1 from "../img/jae-park-7GX5aICb5i4-unsplash.jpg";

const Message = () => {
    return (
        <div className="message owner">
            <div className="messageInfo">
              <img alt="" src={Cat1} ></img>
              <span>just now</span>
            </div>
            <div className="messageContent">
            <p>Hello!</p>
            <img alt="" src={Cat1} ></img>
            </div>
        </div>

    );
}

export default Message;