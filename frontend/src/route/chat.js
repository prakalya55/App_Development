import React, { useState } from 'react';
import './chat.css'
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleSendMessage = () => {
    if (currentMessage.trim() !== '') {
      setMessages([...messages, currentMessage]);
      setCurrentMessage('');
    }
  };

  const handleInputChange = (e) => {
    setCurrentMessage(e.target.value);
  };

  return (
    <div className='msg'>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
 
   
      <div className="message-container">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={currentMessage}
          onChange={handleInputChange}
        /><br></br>
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;