// Import configureStore from Redux Toolkit to create the Redux store
import { configureStore } from "@reduxjs/toolkit";
// Import the counter reducer from the counter slice
import counterReducer from './counterSlice';

// Configure and create the Redux store
const store = configureStore({
  reducer: {
    // Add the counter reducer under the 'counter' key in the store
    counter: counterReducer
  }
});

// Export the configured store as the default export
export default store;
