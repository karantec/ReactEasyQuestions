// 3. Effect with Multiple Dependencies

// You can include multiple dependencies in the array. The effect will re-run if any of these dependencies change.
// Example: Fetching Data Based on Query Parameter

jsx

import React, { useState, useEffect } from 'react';

function DataFetcher({ query }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // This effect runs whenever `query` changes
    fetch(`https://api.example.com/data?query=${query}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [query]); // Dependency array contains `query`

  return (
    <div>
      <h1>Data Fetcher</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}

export default DataFetcher;

// Usage:

// jsx

import React, { useState } from 'react';
import DataFetcher from './DataFetcher';

function App() {
  const [query, setQuery] = useState('initial');

  return (
    <div>
      <button onClick={() => setQuery('updated')}>Change Query</button>
      <DataFetcher query={query} />
    </div>
  );
}

export default App;

// Explanation:

//     Dependency Array with query: The effect re-fetches data whenever the query prop changes.