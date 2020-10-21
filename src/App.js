import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import CellComponent from './components/CellComponent/CellComponent';
import ScoreBoard from './components/Scoreboard/Scoreboard';
import WinnerModalComponent from './components/WinnerModalComponent/WinnerModalComponent';

import {Cell, COLORS} from './classes/Cell';
import { selectAllAdjacent } from './game-engine/AdjacentSelect';
import { randomSelect } from './game-engine/RandomSelect';
import { calculate } from './statistics';

const ROWS = 30;
const COLUMNS = 30;

class App extends React.Component {

  static buildGridStyle(rows, columns) {
    let rowLeftover = (100 - .5 * (rows - 1)) / rows;
    let columnLeftover = (100 - .5 * (columns - 1)) / columns;
    return {
      gridTemplateRows: Array(rows).fill(`${rowLeftover}%`).join(' '),
      gridTemplateColumns: Array(columns).fill(`${columnLeftover}%`).join(' '),
      gap: '.5%',
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      cells: Cell.buildMatrix(ROWS, COLUMNS),
      stats: null,
      start: false,
      color: COLORS.purple,  // purple starts once game commences
      modalShow: false,
    }

    this.buildGridStyle = App.buildGridStyle.bind(this);
    this.userSelect = this.userSelect.bind(this);
    this.buildCells = this.buildCells.bind(this);
    this.setShow = this.setShow.bind(this);
  }

  componentDidMount() {
    const coordinates = randomSelect(ROWS, COLUMNS, this.state.cells);
    // TODO: research more on this
    let cells = [...this.state.cells];
    cells[coordinates.row][coordinates.col].color = COLORS.purple;
    selectAllAdjacent(cells[coordinates.row][coordinates.col], COLORS.purple);
    let stats = calculate(this.state.cells);
    this.setState({cells, stats});
  }

  componentDidUpdate() {
    if (this.intervalId === undefined && this.state.start) {
      this.intervalId = setInterval(() => {
        //cpu first
        const cpuCoordinates = randomSelect(ROWS, COLUMNS, this.state.cells);
        this.userSelect(cpuCoordinates.row, cpuCoordinates.col, this.state.color);
      }, 500);
    }
    if (this.state.start && this.state.stats !== null && this.state.stats.get(COLORS.white) === 0) {
      clearInterval(this.intervalId);
      this.setState({start: false});
      this.setShow(true);
    }
  }

  setShow(modalShow) {
    this.setState({modalShow});
  }

  userSelect(row, col, color) {
    // TODO: research more on this
    let cells = [...this.state.cells];
    selectAllAdjacent(cells[row][col], color);
    let stats = calculate(this.state.cells);
    this.setState({start: true, stats, color: color === COLORS.green ? COLORS.purple : COLORS.green});
  }

  buildCells(rows, columns, cells) {
    let cellComponents = [];
    for (let i = 0; i < rows; i++){
      for (let j = 0; j < columns; j++){
        cellComponents.push((
          <CellComponent
            row={i}
            column={j}
            color={cells[i][j].color}
            userSelect={this.userSelect}>
          </CellComponent>
        ));
      }
    }
    return cellComponents;
  }

  render() {
    return (
      <div className="App">
        <ScoreBoard stats={this.state.stats} totalCells={ROWS * COLUMNS}></ScoreBoard>
        <WinnerModalComponent show={this.state.modalShow} setShow={this.setShow} stats={this.state.stats} totalCells={ROWS * COLUMNS}/>
        <div className="grid" style={this.buildGridStyle(COLUMNS, ROWS)}>
          {this.buildCells(COLUMNS, ROWS, this.state.cells)}
        </div>
      </div>
    );
  }
}


export default App;
