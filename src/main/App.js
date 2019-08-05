import React from "react";
import "./App.css";
import GetMe from "../getApi/getMe";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GetMe />
      </header>
    </div>
  );
}

export default App;
