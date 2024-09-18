// The useEffect hook performs side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.
// Example:

// jsx

import React, { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default FetchData;

// Explanation:

//     Effect Hook: useEffect runs the provided function after the component mounts.
//     Dependencies: The empty array [] means this effect runs only once, similar to componentDidMount in class components.