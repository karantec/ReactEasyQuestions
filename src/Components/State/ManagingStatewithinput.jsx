// 4. Managing Form Inputs with State

// State is commonly used to manage form inputs. Here’s an example where we manage the state of a text input field.

// jsx

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// A functional component to manage form input with state
function NameForm() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value); // Update state with input value
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
      <p>Your name is: {name}</p>
    </div>
  );
}

// Main App component
function App() {
  return (
    <div>
      <NameForm />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// Explanation:

//     The NameForm component uses state to store the value of the input field (name).
//     The handleChange function is called every time the input changes, updating the name state with the current value.
//     The component displays the current input value below the text field.