// Importing useDispatch and useSelector hooks from React Redux for dispatching actions and accessing state
import { useDispatch, useSelector } from 'react-redux';
// Importing CSS file for styling
import './style.css';
// Importing useState hook from React for managing local component state
import { useState } from 'react';
// Importing decrement, increment, and incrementByValue actions from the counterSlice
import { decrement, increment, incrementByValue } from '../counterSlice';

// Defining a functional component named Counter
function Counter() {
  
  // Accessing the current count value from the Redux store
  const count = useSelector((state) => state.counter.value);

  // Setting up local state for increment input value with a default value of 1
  const [incrementValue, setIncrementValue] = useState(1);

  // Setting up the dispatch function to send actions to the Redux store
  const dispatch = useDispatch();

  // Returning the JSX layout for rendering the counter interface
  return (
    <div className="App">
      <div className="counter">
        {/* Button to decrement the count by 1 when clicked */}
        <button onClick={() => dispatch(decrement())}>-</button>

        {/* Displaying the current count value */}
        <h1>{count}</h1>

        {/* Button to increment the count by 1 when clicked */}
        <button onClick={() => dispatch(increment())}>+</button>
      </div>

      <div className="input-container">
        {/* Input field to set the increment value, updating local state on change */}
        <input
          value={incrementValue}
          onChange={(e) => setIncrementValue(parseInt(e.target.value))}
        />

        {/* Button to add the specified increment value to the count */}
        <button onClick={() => dispatch(incrementByValue(incrementValue))}>ADD</button>
      </div>
    </div>
  );
}

// Exporting the Counter component as the default export of this module
export default Counter;
