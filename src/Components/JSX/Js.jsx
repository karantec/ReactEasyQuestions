import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));


// Explanation:

//     <div> and <h1> look like HTML but are written inside the return statement of the JavaScript function.
//     React converts this JSX into JavaScript that the browser can understand.

import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const name = "John";
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// Explanation:

//     Here, we are using the {name} inside JSX to display the value of the name variable dynamically.