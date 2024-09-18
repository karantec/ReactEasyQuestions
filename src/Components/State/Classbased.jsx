// 2. Class-based Component with setState()

// In class-based components, state is managed using this.state and updated with this.setState().

// jsx

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// A class-based component with state
class Counter extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0
    };
  }

  // Method to increase count
  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Method to decrease count
  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
      </div>
    );
  }
}

// Main App component
function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// Explanation:

//     The Counter class component defines its state in the constructor.
//     The increase and decrease methods call this.setState() to update the count state.
//     The render() method returns JSX to display the current count and buttons to change it.