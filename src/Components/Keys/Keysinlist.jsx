// Example 1: Using Keys in a List

// jsx

function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </ul>
  );
}

function App() {
  const numbers = [1, 2, 3, 4, 5];
  return <NumberList numbers={numbers} />;
}

export default App;

// Explanation:

//     The NumberList component renders a list of numbers.
//     Each ListItem element is given a key using the number.toString() value to uniquely identify each item in the list.
//     React uses these keys to track the items and efficiently update the DOM if the list changes.