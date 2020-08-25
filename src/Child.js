import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const Child = () => {
  let counterValue = useContext(CounterContext);

  return (
    <div>
      <h1>Counter Update using ContextApi</h1>
      <h2>Counter Value: {counterValue[0]}</h2>
      <button
        onClick={() => {
          counterValue[1](++counterValue[0]);
        }}
      >
        Increment Context
      </button>
    </div>
  );
};

export default Child;
