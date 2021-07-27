import React, { Component } from 'react';
import './style.css';

import { ThemeContext } from './context';

export default class Comp2 extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ t, toggle }) => {
          return (
            <div>
              <div>
                <h1>Comp2</h1>
              </div>
              <button onClick={toggle}>Toggle Comp 2</button>
              <div>{t ? <>True</> : <>False</>}</div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
