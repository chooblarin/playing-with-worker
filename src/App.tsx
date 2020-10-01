import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import Worker from "./worker";

const instance = new Worker();

function App() {
  const [message, setMessage] = useState("");
  const handleButtonClick = () => {
    instance.expensive(3000).then((count) => {
      const m = `Ran ${count} loops`;
      setMessage(m);
      console.log(m);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={handleButtonClick}>Start expensive work</button>
        {message && <p>{message}</p>}
      </header>
    </div>
  );
}

export default App;
