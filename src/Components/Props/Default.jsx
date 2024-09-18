// 4. Default Props

// You can also set default values for props in case they are not provided. This is done using defaultProps.

// jsx

import React from 'react';
import ReactDOM from 'react-dom';

// Child component with default props
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Setting default prop value
Greeting.defaultProps = {
  name: "Guest",
};

// Parent component
function App() {
  return (
    <div>
      <Greeting /> {/* No name prop passed */}
      <Greeting name="John" /> {/* Passing name prop */}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// Explanation:

//     If no name prop is passed to the Greeting component, it uses the default value of "Guest".
//     In the first Greeting call, since no name is passed, it will display "Hello, Guest!".
//     In the second Greeting call, "John" is passed as the name, so it displays "Hello, John!".