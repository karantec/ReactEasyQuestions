3. Multiple State Variables using useState

You can also use multiple state variables in a functional component.

jsx

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// A functional component with multiple state variables
function UserInfo() {
  const [name, setName] = useState("John");
  const [age, setAge] = useState(25);

  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
      <button onClick={() => setName("Alice")}>Change Name</button>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </div>
  );
}

// Main App component
function App() {
  return (
    <div>
      <UserInfo />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// Explanation:

//     We use useState twice: once to manage the name state and once to manage the age state.
//     The buttons update the name to "Alice" and increment the age.