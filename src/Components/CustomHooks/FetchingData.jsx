1. Custom Hook for Fetching Data

A custom hook that fetches data from an API can be reused across different components.
useFetch.js:

jsx

import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;




// Using the Custom Hook:

jsx

import React from 'react';
import useFetch from './useFetch';

function DataDisplay() {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataDisplay;

// Explanation:

//     Custom Hook: useFetch encapsulates the logic for fetching data from an API and managing loading and error states.
//     Usage: DataDisplay uses useFetch to get data, handle loading, and display the result.