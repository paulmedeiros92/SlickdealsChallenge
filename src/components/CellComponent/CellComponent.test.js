import React from 'react';
import ReactDOM from 'react-dom';
import CellComponent from './CellComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CellComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});