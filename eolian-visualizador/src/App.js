import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="speedometer">
          <div className="needle" style={{ transform: `rotate(${(100-50)*1.8}deg)`}}>
            <spam className="score">0</spam>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
