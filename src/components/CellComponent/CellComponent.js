import React from 'react';
import PropTypes from 'prop-types';
import './CellComponent.scss';
import { COLORS } from '../../classes/Cell';

const CellComponent = ({row, column, color, userSelect}) => {
  const select = () => {
    userSelect(row, column, COLORS.green)
  }
  return (
    <div className="cell" style={{backgroundColor: color}} onClick={select}></div>
  );
}

CellComponent.propTypes = {};

CellComponent.defaultProps = {};

export default CellComponent;
