// The useEffect hook performs side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.
// Example:

// jsx
import { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data); // Directly set the fetched data (an array of posts)
      })
      .catch(error => {
        setError(error.message);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Loading...</p>; // Show loading until data is fetched

  return (
    <div>
      <h1>Posts:</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>: {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;



// Explanation:

//     Effect Hook: useEffect runs the provided function after the component mounts.
//     Dependencies: The empty array [] means this effect runs only once, similar to componentDidMount in class components.