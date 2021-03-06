import React from 'react';
import ReactDOM from 'react-dom';
import Scoreboard from './Scoreboard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Scoreboard stats={new Map()} totalCells={[[], []]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});