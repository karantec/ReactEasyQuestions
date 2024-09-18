// 2. Conditional Rendering Using the Ternary Operator

// The ternary operator allows for shorter conditional rendering and is used directly in JSX.
// Example:

function Greeting(props) {
  return (
    <div>
      {props.isLoggedIn ? (
        <h1>Welcome back, {props.username}!</h1>
      ) : (
        <h1>Please sign up.</h1>
      )}
    </div>
  );
}

function App() {
  return <Greeting isLoggedIn={true} username="John" />;
}

export default App;

// Explanation:

//     The ternary operator (condition ? true : false) is used here to check props.isLoggedIn.
//     If isLoggedIn is true, the user is greeted with a personalized message; otherwise, a "sign up" message is displayed.