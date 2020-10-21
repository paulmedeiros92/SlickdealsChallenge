import React from 'react';
import ReactDOM from 'react-dom';
import { COLORS } from '../../classes/Cell';
import CellComponent from './CellComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CellComponent row={0} column={0} color={COLORS.purple} userSelect={() => {}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});