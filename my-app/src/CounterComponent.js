import React from "react";
import { useCounter } from "./useCounter"; // Importing the useCounter hook

function CounterComponent() {
  const counter = useCounter(0);

  return (
    <div>
      <p>Count: {counter.count}</p>
      <button onClick={counter.increment}>Increment</button>
      <button onClick={counter.decrement}>Decrement</button>
      <button onClick={counter.reset}>Reset</button>
    </div>
  );
}

export default CounterComponent;
