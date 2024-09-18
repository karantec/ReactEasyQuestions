// 2. Consuming Context in Components

// Components that need access to the context can use the useContext hook.
// ThemedComponent.js:

// jsx

import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <p>The current theme is {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemedComponent;

// Explanation:

//     Context Consumption: useContext(ThemeContext) retrieves the current theme and toggleTheme function from the nearest ThemeProvider.