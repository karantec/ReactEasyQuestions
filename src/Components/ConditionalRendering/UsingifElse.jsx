// 1. Conditional Rendering Using if-else

// You can conditionally render elements using standard JavaScript if-else statements. This is done outside of JSX.
// Example:

// jsx

function UserGreeting(props) {
  return <h1>Welcome back, {props.username}!</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <UserGreeting username="John" />;
  } else {
    return <GuestGreeting />;
  }
}

function App() {
  return <Greeting isLoggedIn={true} />;
}

export default App;

// Explanation:

//     The Greeting component takes a prop (isLoggedIn) and based on that value, it conditionally renders either UserGreeting or GuestGreeting.
//     If isLoggedIn is true, the UserGreeting is displayed; otherwise, the GuestGreeting is shown.