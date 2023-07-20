import React, { useEffect, useState } from 'react'
import axios from 'axios';
const ChatPage = () => {
  const [chats, setChats] = useState([]);
    const FetchChats = async () =>{
        const {data} = await axios.get('/api/chat/');
        setChats(data);
      };
      
      useEffect(()=>{
        FetchChats();
    },[])

  return (
    <div>{chats.map()}
    </div>
  )
}

export default ChatPage
