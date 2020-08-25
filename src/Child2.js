import React, { useReducer } from "react";
import counterReducer from "./CounterReducer";

const Child2 = () => {
  let [state, dispatch] = useReducer(counterReducer, 0);
  return (
    <div>
      <h1>Counter update using Reducer</h1>
      <h2>Counter Value: {state} </h2>
      <button
        onClick={() => {
          dispatch("INCREMENT");
        }}
      >
        Increment Reducer
      </button>
    </div>
  );
};

export default Child2;
