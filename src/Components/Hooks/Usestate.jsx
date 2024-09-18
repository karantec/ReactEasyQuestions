// 1. useState

// The useState hook lets you add state to functional components.
// Example:

// jsx

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;

// Explanation:

//     Initialization: useState(0) initializes the state variable count with a value of 0.
//     State Update: setCount is used to update the state whenever the button is clicked.