import React from 'react';
import PropTypes from 'prop-types';
import './Scoreboard.scss';
import { COLORS } from '../../classes/Cell';

function createLegendIcons(stats, totalCells) {
  return Object.values(COLORS).map(color => {
    let displayNumber = stats === null ? 0 : stats.get(color);
    return (
      <div className="icon-box">
        <div className="number">{(100 * (displayNumber/totalCells)).toFixed(0)}%</div>
        <div className="icon cell" style={{backgroundColor: color}}></div>
      </div>
    );
  });
}

const Scoreboard = ({stats, totalCells}) => (
  <div className="Scoreboard">
    <div className="title">
      <img className="logo" src="https://slickdeals.net/image-pool/sd-branding/sd-logomark.svg" alt="SD"></img>
      <img className="logo" src="https://slickdeals.net/image-pool/sd-branding/sd-logotext-reverse.svg" alt="slickdeals"></img>
      <div className="text">CODING CHALLENGE</div>
    </div>
    <div className="legend">{createLegendIcons(stats, totalCells)}</div>
  </div>
);

Scoreboard.propTypes = {};

Scoreboard.defaultProps = {};

export default Scoreboard;
