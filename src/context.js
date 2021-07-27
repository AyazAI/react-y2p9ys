import React, { useState } from 'react';

export const ThemeContext = React.createContext();

export default function ThemeProvider({ children }) {
  const [t, setT] = useState(true);

  function toggle() {
    setT(!t);
  }

  return (
    <ThemeContext.Provider value={{ t, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
