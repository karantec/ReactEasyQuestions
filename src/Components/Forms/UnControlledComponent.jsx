// 2. Uncontrolled Components

// Uncontrolled components are form elements that do not directly bind their values to React state. Instead, they use React refs to access the current values when needed.
// Example:

// jsx

import React, { useRef } from 'react';

function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`A name was submitted: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          ref={inputRef}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;

// Explanation:

//     Ref Usage: The inputRef is created using useRef and is attached to the input field via the ref attribute.
//     Accessing Values: The handleSubmit function accesses the current value of the input field using inputRef.current.value.