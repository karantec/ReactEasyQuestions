// 5. Conditional Rendering Based on State

// State is also useful for conditionally rendering parts of a component’s UI. For example, you can toggle between showing or hiding content based on a state value.

// jsx

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// A functional component to toggle content visibility
function ToggleContent() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle visibility
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Content
      </button>
      {isVisible && <p>This is the content that can be toggled!</p>}
    </div>
  );
}

// Main App component
function App() {
  return (
    <div>
      <ToggleContent />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// Explanation:

//     The isVisible state determines whether the content is shown or hidden.
//     The toggleVisibility function toggles the isVisible state between true and false.
//     When isVisible is true, the content (<p>) is displayed; when it's false, the content is hidden.