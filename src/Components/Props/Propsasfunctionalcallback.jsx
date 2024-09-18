// 3. Props as Functions (Callback Functions)

// You can also pass functions as props. This is useful when the child component 
// needs to communicate with the parent component (like on a button click).

jsx

import React from 'react';
import ReactDOM from 'react-dom';

// Child component that receives a function as a prop
function Button(props) {
  return <button onClick={props.handleClick}>Click me</button>;
}

// Parent component
function App() {
  function showAlert() {
    alert("Button clicked!");
  }

  return (
    <div>
      <Button handleClick={showAlert} /> {/* Passing function as a prop */}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// Explanation:

//     The Button component receives a handleClick function as a prop and calls it when the button is clicked.
//     In the App component, we pass the showAlert function to the Button component. When the button is clicked, it triggers the showAlert function, showing an alert.