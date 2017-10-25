import React, { Component } from 'react';
import "./Stopwatch.css"

const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state ={
      secondsElapsed:0,
      laps:[],
    lastClearedIncrementer: 0};
    this.incrementer = null;
  }
    handleStartClick() {
    this.incrementer = setInterval(()=>
      this.setState({
        secondsElapsed: this.state.secondsElapsed+1
      })
    , 1000);
  }

  handlePauseClick() {
    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer
    });
  }

  handleResetClick() {
    clearInterval(this.incrementer);
    this.setState({
      secondsElapsed: 0,
      laps: []
    });
  }




  render() {

    return (
      <div className="stopwatch">
        <h1>{formattedSeconds(this.state.secondsElapsed)}</h1>
        <div className="controls">
          <button onClick={this.handleResetClick.bind(this)}>Reset</button>
          <button onClick={this.handleStartClick.bind(this)}>Start</button>
          <button onClick={this.handlePauseClick.bind(this)}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
