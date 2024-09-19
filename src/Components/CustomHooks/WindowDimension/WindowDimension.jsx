// 3. Custom Hook for Window Dimensions

// A custom hook that provides the current dimensions of the window.
// useWindowDimensions.js:

// jsx

import { useState, useEffect } from 'react';

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default useWindowDimensions;




// Explanation:

//     Custom Hook: useWindowDimensions tracks and returns the window’s width and height.
//     Usage: WindowSize uses useWindowDimensions to display the current dimensions of the window.