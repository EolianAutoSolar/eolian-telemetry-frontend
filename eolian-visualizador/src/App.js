import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:8000'); // Connect to the Socket.IO server

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Listen for the 'update' event from the server
    socket.on('update', (receivedData) => {
      setData(receivedData);
    });
  }, []);

  const rpm = data?.rpm || 0;

  return (
    <div className="App">
      <header className="App-header">
        <div className="speedometer">
          <div
            className="needle"
            style={{
              transform: `rotate(${(rpm - 50) * 1.8}deg)`,
            }}
          >
            <span className="score">{rpm}</span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;