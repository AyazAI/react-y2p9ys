import React, { useContext } from 'react';
import './style.css';

import { ThemeContext } from './context';

export default function Comp() {
  const { t, toggle } = useContext(ThemeContext);
  return (
    <div>
      <h1>Comp</h1>
      <button onClick={toggle}>Toggle Comp 1</button>
      {t ? <>True</> : <>False</>}
    </div>
  );
}
