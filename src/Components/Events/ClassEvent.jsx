// In class components, event handlers are typically defined as methods and are bound to the component instance.

// jsx

import  { Component } from 'react';

class ClassClickButton extends Component {
  constructor(props) {
    super(props);
    // Initialize the state
    this.state = {
      count: 0,
    };
    // Binding the event handler method
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2=this.handleClick2.bind(this);
  }

  // Event handler method to handle the button click
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  handleClick2() {
    this.setState({ count: this.state.count - 1 });
  }


  render() { 
    return (
      <div>
        <p>You clicked {this.state.count} times.</p>
        {/* Event handler passed to the button */}
        <button onClick={this.handleClick}>Click me</button>
        <button onClick={this.handleClick2}>Click me</button>
      </div>
    );
  }
}

export default ClassClickButton;

// Explanation:

//     this.handleClick = this.handleClick.bind(this);: In class components, event handlers need to be explicitly bound to the class instance, so they have access to this.
//     this.setState: Updates the component’s state and triggers a re-render.
//     The event handler is passed as onClick={this.handleClick}.