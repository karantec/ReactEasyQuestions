// 2. Passing Multiple Props

// You can pass multiple props to a child component. Here’s an example where we pass both name and age props:

// jsx

import React from 'react';
import ReactDOM from 'react-dom';

// Child component that receives multiple props
function UserInfo(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}

// Parent component
function App() {
  return (
    <div>
      <UserInfo name="Alice" age={25} /> {/* Passing name and age props */}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// Explanation:

//     The UserInfo component takes two props: name and age.
//     In the App component, we pass "Alice" as the name and 25 as the age. The UserInfo component then displays these values.