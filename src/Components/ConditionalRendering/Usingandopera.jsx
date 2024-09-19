// 3. Conditional Rendering Using the Logical && Operator

// You can use the && operator for conditions where you only want to render something if the condition is true.
//  If the condition is false, nothing is rendered.
// Example:

// jsx

function Notification(props) {
  const hasNewMessages = props.newMessages.length > 0;
  return (
    <div>
      <h1>Hello!</h1>
      {/* Only render the notification if newMessages is true */}
      {hasNewMessages && <p>You have {props.newMessages.length} new messages.</p>}
    </div>
  );
}

function App() {
  const messages = ['Message 1', 'Message 2', 'Message 3'];

  return <Notification newMessages={messages} />;
}

export default App;

// Explanation:

//     The && operator checks if hasNewMessages is true (i.e., if there are any new messages). If true, the number of messages is displayed.
//     If hasNewMessages is false (i.e., no new messages), nothing is rendered in place of the p element.