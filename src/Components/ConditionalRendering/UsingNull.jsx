// 4. Conditional Rendering with null

// Sometimes, you may want to return null to explicitly render nothing. In this case, the component returns null, and React won’t render anything.
// Example:

// jsx

function WarningMessage(props) {
  if (!props.showWarning) {
    return null;
  }

  return <p className="warning">This is a warning message!</p>;
}

function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <WarningMessage showWarning={true} />
    </div>
  );
}

export default App;

// Explanation:

//     If showWarning is false, the WarningMessage component returns null, and nothing gets rendered for that component.
// Return null: If you don't want to render anything, returning null can be used to conditionally hide content.