// 1. Functional Components

// Functional components are just JavaScript functions that return JSX (the HTML-like syntax in React). They are the simplest type of component.

// Here’s a simple example:


import React from 'react';
import ReactDOM from 'react-dom';

// A simple functional component
function Greeting() {
  return <h1>Hello, World!</h1>;
}

// Main App component
function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// Explanation:

//     Greeting is a functional component that returns an h1 tag with the text "Hello, World!".
//     App is another component that uses the Greeting component.
//     We can reuse the Greeting component anywhere in the app.

