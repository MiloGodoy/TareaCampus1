import logo from './logo.svg';
import './App.css';
import ComponenteAComponent from './components/container/componenteA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteAComponent></ComponenteAComponent> 
      </header>
    </div>
  );
}

export default App;
