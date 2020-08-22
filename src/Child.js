import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const Child = () => {
  let counterValue = useContext(CounterContext);

  return (
    <div>
      <h1>Counter App ContextApi</h1>
      <h2>Counter Value: {counterValue[0]}</h2>
      <button
        onClick={() => {
          counterValue[1](++counterValue[0]);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Child;
