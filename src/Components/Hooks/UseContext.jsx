// 3. useContext

// The useContext hook allows you to access context values in functional components.
// Example:

jsx

import React, { createContext, useContext, useState } from 'react';

// Create a context
const ThemeContext = createContext('light');

function ThemedComponent() {
  const theme = useContext(ThemeContext);

  return <div>The current theme is {theme}</div>;
}

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <ThemedComponent />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;

// Explanation:

//     Context: ThemeContext provides a way to pass data through the component tree without having to pass props manually at every level.
//     Accessing Context: useContext(ThemeContext) allows ThemedComponent to access the current value of the context.