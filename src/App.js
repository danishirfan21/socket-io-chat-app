import './App.css';

function App() {
  return (
    <div className="app">
      <div className="form-container">
        <h1>CodeConnect</h1>
        <form>
          <input type="text" placeholder="Pick a display name..." required />
          <select required>
            <option value="">-- Pick a Room --</option>
            <option value="lounge">Lounge</option>
            <option value="code-warriors">Code Warriors</option>
            <option value="debug-zone">Debug Zone</option>
            <option value="game-chat">Game Chat</option>
            <option value="music-lovers">Music Lovers</option>
          </select>
          <button type="submit">Connect Now</button>
        </form>
      </div>
    </div>
  );
}

export default App;
