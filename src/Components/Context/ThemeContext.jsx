// 1. Creating a Context

// First, you create a context using React.createContext(). This context will be used to provide and consume the shared data.
// ThemeContext.js:

// jsx

import React, { createContext, useState } from 'react';

// Create a Context with a default value
const ThemeContext = createContext('light');

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };

// Explanation:

//     Context Creation: ThemeContext is created with a default value 'light'.
//     Provider: ThemeProvider uses ThemeContext.Provider to make the theme and toggleTheme function available to its descendants.