1. Functional Component with useState Hook

In functional components, the useState hook is used to manage state. It allows you to declare a state variable and a function to update it.

jsx

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// A functional component using state
function Counter() {
  // Declare a state variable 'count' and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

// Main App component
function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// Explanation:

//     The useState hook is used to define a state variable called count, which starts at 0.
//     The setCount function updates the value of count.
//     When the "Increase" button is clicked, setCount(count + 1) increments the count.
//     When the "Decrease" button is clicked, setCount(count - 1) decrements the count.