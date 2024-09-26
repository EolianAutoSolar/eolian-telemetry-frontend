
import React, { useState } from 'react';
import './App.css';

function App() {
  const [score, setSpeed] = useState(0);
  const handleInputChange = (event) => {
    const newSpeed = parseInt(event.target.value, 10);
    if (!isNaN(newSpeed) && newSpeed >= 0 && newSpeed <= 100) {
      setSpeed(newSpeed);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="speedometer">
          <div className="needle" style={{ transform: `rotate(${(score-50)*1.8}deg)`}}>
            <spam className="score">{score}</spam>
          </div>
        </div>
        {/* Input para cambiar la velocidad */}
        <input
          type="number"
          value={score}
          onChange={handleInputChange}
          min="0"
          max="100"
          step="1"
          style={{ marginTop: '20px', fontSize: '18px' }}
        />
      </header>
    </div>

    
  );
}

export default App;
