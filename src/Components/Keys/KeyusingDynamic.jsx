// Example 3: Keys with Dynamic Data (Using id)

// When working with dynamic lists, it’s better to use a unique identifier (like an id property from the data) as the key.

// jsx

function TaskList(props) {
  return (
    <ul>
      {props.tasks.map((task) => (
        <li key={task.id}>{task.name}</li>
      ))}
    </ul>
  );
}

function App() {
  const tasks = [
    { id: 1, name: 'Learn React' },
    { id: 2, name: 'Build a To-Do App' },
    { id: 3, name: 'Master JavaScript' },
  ];
  return <TaskList tasks={tasks} />;
}

export default App;

Explanation:

    // Each task in the list has a unique id property.
    // The key attribute is set to task.id, ensuring that React can uniquely identify each task, even if tasks are reordered or added.