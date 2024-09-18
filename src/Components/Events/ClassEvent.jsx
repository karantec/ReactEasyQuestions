// In class components, event handlers are typically defined as methods and are bound to the component instance.

// jsx

import React, { Component } from 'react';

class ClickButton extends Component {
  constructor(props) {
    super(props);
    // Initialize the state
    this.state = {
      count: 0,
    };
    // Binding the event handler method
    this.handleClick = this.handleClick.bind(this);
  }

  // Event handler method to handle the button click
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() { 
    return (
      <div>
        <p>You clicked {this.state.count} times.</p>
        {/* Event handler passed to the button */}
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default ClickButton;

// Explanation:

//     this.handleClick = this.handleClick.bind(this);: In class components, event handlers need to be explicitly bound to the class instance, so they have access to this.
//     this.setState: Updates the component’s state and triggers a re-render.
//     The event handler is passed as onClick={this.handleClick}.