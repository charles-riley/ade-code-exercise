import './App.css';
import printCreditTypeIsValid from './credit-card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          Ade Credit Card Problem <span className="heart">♥️</span>
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {printCreditTypeIsValid()}
        </div>
      </header>
    </div>
  );
}

export default App;
