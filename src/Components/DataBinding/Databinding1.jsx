// 1. Parent Passing Data to Child via Props

// In this example, the parent component passes data to the child component.

// jsx

import React from 'react';
import ReactDOM from 'react-dom';

// Child component
function ChildComponent(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Parent component
function ParentComponent() {
  const name = "John";
  return (
    <div>
      <ChildComponent name={name} />
    </div>
  );
}

ReactDOM.render(<ParentComponent />, document.getElementById('root'));

// Explanation:

//     The ParentComponent passes the name prop ("John") to the ChildComponent.
//     The ChildComponent receives this prop and displays it in an h1 tag: "Hello, John!".
//     The data flows from the parent (ParentComponent) to the child (ChildComponent), following one-way data binding.


// 2. Child Requesting Data Change via Callback

// Since the child component cannot modify the props, it can ask the parent to modify the data by calling a 
// callback function passed by the parent.

// jsx

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Child component
function ChildComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <button onClick={props.changeName}>Change Name</button>
    </div>
  );
}

// Parent component
function ParentComponent() {
  const [name, setName] = useState("John");

  // Callback function to change the name
  function handleChangeName() {
    setName("Alice");
  }

  return (
    <div>
      <ChildComponent name={name} changeName={handleChangeName} />
    </div>
  );
}

ReactDOM.render(<ParentComponent />, document.getElementById('root'));

// Explanation:

//     The ParentComponent has a state variable name (initially "John") and a function handleChangeName that changes the name to "Alice".
//     The ParentComponent passes two props to the ChildComponent:
//         name (data),
//         changeName (callback function).
//     The ChildComponent displays the name and has a button that, when clicked, calls the changeName function.
//     When the button is clicked, the child component triggers the handleChangeName function, causing the parent to update the state, and the name is changed to "Alice".