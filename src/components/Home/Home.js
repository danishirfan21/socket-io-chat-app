import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    room: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username.trim() || !formData.room) {
      setError('Please fill in all fields');
      return;
    }
    navigate('/chat-room', { state: formData });
  };

  return (
    <div className="home-page">
      <div className="home-container">
        <h1 className="home-title">CodeConnect</h1>
        <form className="home-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Pick a display name..."
            className={error && !formData.username ? 'error' : ''}
            required
          />
          <select
            name="room"
            value={formData.room}
            onChange={handleChange}
            className={error && !formData.room ? 'error' : ''}
            required
          >
            <option value="">-- Pick a Room --</option>
            <option value="lounge">Lounge</option>
            <option value="code-warriors">Code Warriors</option>
            <option value="debug-zone">Debug Zone</option>
            <option value="game-chat">Game Chat</option>
            <option value="music-lovers">Music Lovers</option>
          </select>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="home-button">
            Connect Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
