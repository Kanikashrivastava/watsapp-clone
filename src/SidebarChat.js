import React from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';


function SidebarChat() {
    return (
        <div className="SidebarChat">
            <Avatar />
            <div className="sidebarChat_info">
              <h2>Room name</h2>
              <p>This is the last massage</p>
            </div>
        </div>
    )
}

export default SidebarChat
