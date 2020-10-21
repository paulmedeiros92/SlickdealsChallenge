import React from 'react';
import PropTypes from 'prop-types';
import './WinnerModalComponent.scss';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { COLORS } from '../../classes/Cell';

const WinnerModalComponent = ({show, setShow, stats}) => {
  let displayString = "";
  if (stats !== null) {
    const user = stats.get(COLORS.green);
    const cpu = stats.get(COLORS.purple);
    if (user === cpu) {
      displayString = "It's a tie!"
    } else {
      displayString = user > cpu ? "You Win!" : "CPU Wins...";
    }
  }

  return (
    <Modal show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <Modal.Title id="contained-modal-title-vcenter">{displayString}</Modal.Title>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
        <Button variant="primary" onClick={() => window.location.reload()}>Play Again!</Button>
      </Modal.Footer>
    </Modal>
  );
}

WinnerModalComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  stats: PropTypes.instanceOf(Map).isRequired,
};

WinnerModalComponent.defaultProps = {};

export default WinnerModalComponent;
