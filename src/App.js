import React, {useEffect, useState} from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get('/messages/sync').then((response) => {
      setMessages(response.data);
    })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('74ecd5be943cb4ab956e', {
      cluster: 'ap2'
    });
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])
 
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar/>
        <Chat messages={messages}/>
      </div>
      
    </div>
  );
}

export default App;
