// 1. Handling Events in Functional Components

// Functional components typically use arrow functions or methods like useState to handle events.

// jsx

import React, { useState } from 'react';

function ClickButton() {
  // Using useState to manage the click count state
  const [count, setCount] = useState(0);

  // Event handler for the button click
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times.</p>
      {/* Event handler passed to the button */}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ClickButton;

// Explanation:

//     onClick: This is the event listener, similar to how it would be written in HTML (onclick).
//     handleClick: This is the event handler function that updates the count when the button is clicked.
//     The state is updated using setCount, which triggers a re-render and shows the updated count.