// import { useState } from "react";

// function ToggleContent() {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggleVisibility = () => {
//     setIsVisible(!isVisible); // Toggle visibility
//   };

//   return (
//     <div>
//       <button onClick={toggleVisibility}>
//         {isVisible ? "Hide" : "Show"} Content
//       </button>
//       {isVisible && <p>This is the content that can be toggled!</p>}
//     </div>
//   );
// }
// function NameForm() {
//   const [name, setName] = useState("");

//   const handleChange = (event) => {
//     setName(event.target.value); // Update state with input value
//   };

//   return (
//     <div>
//       <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
//       <p>Your name is: {name}</p>
//     </div>
//   );
// }
// Main App component

// function UserInfo() {
//   const [name, setName] = useState("John");
//   const [age, setAge] = useState(25);
//   const [address, setAddress]=useState("Gurgaon");

//   return (
//     <div>
//       <h1>Name: {name}</h1>
//       <p>Age: {age}</p>
//       <p>address: {address}</p>
//       <button onClick={() => setName("Alice")}>Change Name</button>
//       <button onClick={() => setAge(age + 1)}>Increase Age</button>
//       <button onClick={() => setAddress("Delhi")}>Increase Age</button>
//     </div>
//   );
// }

// const App = () => {
//   return (
//     <div>
//      <UserInfo/> 
//     </div>
//   )
// }

// export default App

import { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor: Component is initialized.");
  }

  // Mounting: Called once when the component is added to the DOM
  componentDidMount() {
    console.log("componentDidMount: Component is mounted.");
    // Example: Fetching data or setting up timers
    document.title = `You clicked ${this.state.count} times`;
  }

  // Updating: Called after state or props changes
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: Component is updated.");
    // Example: Reacting to state changes
    if (prevState.count !== this.state.count) {
      document.title = `You clicked ${this.state.count} times`;
    }
  }

  // Unmounting: Called when the component is removed from the DOM
  componentWillUnmount() {
    console.log("componentWillUnmount: Component is about to be removed.");
    // Example: Clean up timers, listeners, or cancel API requests
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increaseCount}>Increase Count</button>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { showComponent: true };
  }

  toggleComponent = () => {
    this.setState({ showComponent: !this.state.showComponent });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleComponent}>Toggle Component</button>
        {this.state.showComponent && <LifecycleDemo />}
      </div>
    );
  }
}

export default App;

// Explanation of Lifecycle Phases:

//     Mounting Phase (componentDidMount):
//         In this phase, the component is rendered into the DOM.
//         In the example, after the component mounts, componentDidMount is called, and the document title is set to reflect the current count.

//     Updating Phase (componentDidUpdate):
//         When the state or props of a component change, the component re-renders, and componentDidUpdate is called.
//         Here, whenever the count is updated, the component re-renders, and componentDidUpdate is called to update the document title.

//     Unmounting Phase (componentWillUnmount):
//         This method is called just before the component is removed from the DOM.
//         In the example, when the "Toggle Component" button is clicked, the LifecycleDemo component is unmounted, and componentWillUnmount is called. This is where you would 
//         typically clean up any resources like timers or network requests.
