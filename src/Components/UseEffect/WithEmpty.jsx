// 1. Effect with an Empty Dependency Array

// If you provide an empty dependency array, the effect runs only once after the initial render.
// Example: Fetching Data on Initial Render

// jsx

import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // This effect runs only once after the initial render
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array

  return (
    <div>
      <h1>Data Fetcher</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}

export default DataFetcher;

// Explanation:

//     Empty Dependency Array: The effect runs only once after the component mounts. It fetches data and updates the state.