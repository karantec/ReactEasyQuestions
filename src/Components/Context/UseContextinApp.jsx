// 3. Using Context in the App

// Wrap the part of your component tree that needs access to the context with the provider.
// App.js:

// jsx

import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemedComponent from './ThemedComponent';

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Context API Example</h1>
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;

// Explanation:

//     Provider Wrapping: ThemeProvider is used to wrap the ThemedComponent, so it can access the context value.

