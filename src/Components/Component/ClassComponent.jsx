// 2. Class-based Components

// Before React Hooks, components were primarily created using classes. These components can also hold state and lifecycle methods. Even though functional components are more common now, it's good to know about class components.

// Here’s a simple example of a class-based component:

// jsx

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// A class-based component
class Greeting extends Component {
  render() {
    return <h1>Hello, World from a class component!</h1>;
  }
}

// Main App component
class App extends Component {
  render() {
    return (
      <div>
        <Greeting />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// Explanation:

//     Greeting is a class-based component that extends React.Component.
//     The render() method is required in class-based components, and it returns JSX.
//     The App component also extends React.Component and uses the Greeting component just like in the functional example.