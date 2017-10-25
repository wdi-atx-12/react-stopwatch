import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeElapsed: 0,
      lastStoppingPoint: null
    };
    this.interval = null;
    this.start = this.start.bind(this);
    this.clock = this.clock.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  clock() {
    this.setState({
      timeElapsed: this.state.timeElapsed + 1
    });
  }

  start() {
    this.interval = setInterval(this.clock, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  reset() {
    this.setState({
      timeElapsed: 0
    });
  }

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.timeElapsed}</h1>
        <div className="controls">
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.start} >Start</button>
          <button onClick={this.stop}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
