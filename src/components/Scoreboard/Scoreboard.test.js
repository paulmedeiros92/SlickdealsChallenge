import React from 'react';
import ReactDOM from 'react-dom';
import Scoreboard from './Scoreboard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Scoreboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});