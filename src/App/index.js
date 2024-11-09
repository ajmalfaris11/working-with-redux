// Importing CSS file and the useState hook from React
import './style.css';
import { useState } from 'react';

// Defining a functional component named Counter
function Counter() {

  // Using useState to manage the 'count' state, initializing it to 0
  const [count, setCount] = useState(0);
  // Using useState to manage the 'incrementValue' state, initializing it to 1
  const [incrementValue, setIncrementValue] = useState(1);

  // Function to increment count by 1
  const increment = () => setCount(count => count + 1);
  // Function to decrement count by 1
  const decrement = () => setCount(count => count - 1);

  // Function to increment count by a specified 'incrementValue'
  const incrementByValue = () => setCount(count => count + incrementValue);

  // Returning the JSX layout for rendering
  return (
    <div className="App">
      <div className="counter">
        {/* Button to decrement the count */}
        <button onClick={decrement}>-</button>

        {/* Displaying the current count */}
        <h1>{count}</h1>

        {/* Button to increment the count */}
        <button onClick={increment}>+</button>
      </div>

      <div className="input-container">
        {/* Input field to set the increment value */}
        <input
          value={incrementValue}
          onChange={(e) => setIncrementValue(parseInt(e.target.value))}
        />

        {/* Button to add the specified increment value to the count */}
        <button onClick={incrementByValue}>ADD</button>
      </div>
    </div>
  );
}

// Exporting the Counter component as the default export
export default Counter;
