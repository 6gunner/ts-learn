import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import LikeButton from "./components/LikeButton";
import CounterButton from "./components/CounterButton";
import CONSTS from './const';

function App() {
  const [color, setColor] = React.useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <input
          type="color"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setColor(e.target.value)
          }
        />
        {/* <CounterButton color={color} /> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
