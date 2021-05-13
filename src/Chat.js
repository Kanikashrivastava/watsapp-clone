import React from "react";
import "./Chat.css";
import { Avatar } from '@material-ui/core';

function Chat() {
  return <div className="chat">
    <div className="chat_header">
      <Avatar />
      <div className="chat_headerInfo">
        <h3>Room name</h3>
      </div>
    </div>
  </div>;
}

export default Chat;
