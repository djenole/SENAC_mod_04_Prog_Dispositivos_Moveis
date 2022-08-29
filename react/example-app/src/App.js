import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <code>aaaah!</code> para com esse negócio.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button className="btn" type="submit">Clica aqui não, clica alí ^</button>
      </header>
    </div>
  );
}

export default App;
