import React, { useState } from "react";
import "./App.css";
import Parent from "./Parent";
import CounterContext from "./CounterContext";

function App() {
  let counterState = useState(0);

  return (
    <CounterContext.Provider value={counterState}>
      <div>
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
