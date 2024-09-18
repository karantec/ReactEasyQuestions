// 5. Passing Objects as Props

// You can also pass an object as a prop to keep your code more organized.

// jsx

import React from 'react';
import ReactDOM from 'react-dom';

// Child component that receives an object as a prop
function UserInfo(props) {
  return (
    <div>
      <h1>Name: {props.user.name}</h1>
      <p>Age: {props.user.age}</p>
    </div>
  );
}

// Parent component
function App() {
  const user = { name: "Alice", age: 25 };

  return (
    <div>
      <UserInfo user={user} /> {/* Passing an object as a prop */}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// Explanation:

//     The UserInfo component accepts a user object prop and uses props.user.name and props.user.age to display the user information.
//     In the App component, we pass the user object to the UserInfo component.