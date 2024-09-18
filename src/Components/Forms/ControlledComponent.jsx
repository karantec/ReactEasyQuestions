// 1. Controlled Components

// Controlled components are form elements whose values are controlled by React state. The value of the form element is tied to the component's state, and any changes to the input are handled via event handlers.
// Example:


import React, { useState } from 'react';

function ControlledForm() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`A name was submitted: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;

// Explanation:

//     State Management: The inputValue state variable holds the current value of the input field.
//     Event Handling: The handleChange function updates the state whenever the user types in the input field.
//     Form Submission: The handleSubmit function prevents the default form submission and shows an alert with the input value.