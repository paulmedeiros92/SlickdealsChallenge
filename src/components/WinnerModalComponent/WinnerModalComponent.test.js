import React from 'react';
import ReactDOM from 'react-dom';
import WinnerModalComponent from './WinnerModalComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WinnerModalComponent show={false} setShow={() => {}} stats={new Map()} totalCells={0}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});