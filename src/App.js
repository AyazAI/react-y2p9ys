import React, { useState } from 'react';
import './style.css';
import Comp from './Comp';
import Comp2 from './Comp2';

import ThemeProvider from './context';

export default function App() {
  return (
    <ThemeProvider>
      <h1>Hy Ayaz!</h1>
      <Comp />
      <Comp2 />
    </ThemeProvider>
  );
}
