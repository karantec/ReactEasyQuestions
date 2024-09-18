// Let’s understand this with simple examples.
// 1. Basic Example of Props

// In this example, we pass a name prop from the parent component to the child component.

// jsx

import React from 'react';
import ReactDOM from 'react-dom';

// Child component that receives props
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Parent component
function App() {
  return (
    <div>
      <Greeting name="John" /> {/* Passing name prop */}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// Explanation:

//     The Greeting component accepts props as a parameter and uses props.name to display "Hello, John!".
//     The App component passes the name prop with the value "John" to the Greeting component.