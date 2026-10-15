import { useState } from "react";
function Counter() {
  //declare the state-to maintain the counter variable
  //set the initial value to 0
  const [count, setCount] = useState(0);
  //function to increase the counter value
  const increase = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };
  //function to decrease the counter value
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  //function to reset the counter value --set to value 2
  const reset = () => {
    setCount(2);
  };
  return (
    <div>
      <h1>Counter App</h1>
      {/* display the count value */}
      <h3>Count {count}</h3>
      {/* create a button with click event 
      to call the 'increase' function*/}
      <button onClick={increase} disabled={count == 5}>
        Increase
      </button>
      <br />
      <button onClick={decrease} disabled={count == 0}>
        Decrease
      </button>
      <br />
      <button onClick={reset}>Reset</button>

      {/* limits reached messages */}
      {count == 5 && <p>max limit reached for counter</p>}
      {count == 0 && <p>min limit reached for counter</p>}
    </div>
  );
}
export default Counter;
