import logo from './logo.svg';
import './App.css';
import TestComponent from "./components/TestComponent";

const Comp = () => {
  return <p>MY DEMO</p>
}

function App() {
  return (
    <div className="App" id='root'>
            <TestComponent />

      <header className="App-header">
        <h1>THIs is the template</h1>
  
      </header>
    </div>
  );
}

export default App;
