import React, { useState } from 'react';
import './ChatRoom.css';

const ChatRoom = () => {
  const [messages, setMessages] = useState([
    { user: 'Joe', text: 'Hi Dan', timestamp: '26/07/2022, 19:52:17' },
    { user: 'eqw', text: 'qweqew', timestamp: '28/07/2022, 19:30:15' },
    { user: 'ChatBot', text: 'Welcome Dan', timestamp: '28/07/2022, 19:31:16' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const users = ['Joe', 'Dan'];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      user: 'You',
      text: newMessage,
      timestamp: new Date().toLocaleString(),
    };
    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="chat-room">
      <div className="sidebar">
        <h2>ChatRoom</h2>
        <h3>Online Users</h3>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
        <button className="leave-button">Leave Room</button>
      </div>

      <div className="chat-section">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.user === 'You' ? 'sent' : ''}`}
            >
              <div className="message-header">
                <span className="message-user">{message.user}</span>
                <span className="message-timestamp">{message.timestamp}</span>
              </div>
              <p className="message-text">{message.text}</p>
            </div>
          ))}
        </div>

        <form className="message-input" onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;
