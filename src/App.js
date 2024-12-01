import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatRoom from './components/ChatRoom/ChatRoom';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat-room" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
