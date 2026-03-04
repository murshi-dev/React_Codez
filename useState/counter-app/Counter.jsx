import { useState } from "react";

function Counter() {
  //declare a state for the count --a number
  const [count, setCount] = useState(0);

  // increase function
  const increase = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  // decrease function
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  //reset function
  const reset = () => {
    setCount(2); //reset to a middle value
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      {/* //on click call the increase function */}
      <button onClick={increase} disabled={count === 5}>
        Increase
      </button>

      <button onClick={decrease} disabled={count === 0}>
        Decrease
      </button>

      <button onClick={reset}>Reset</button>

      {/* limit messages */}
      {count === 5 && <p>Maximum limit reached</p>}
      {count === 0 && <p>Minimum limit reached</p>}
    </div>
  );
}
export default Counter;
