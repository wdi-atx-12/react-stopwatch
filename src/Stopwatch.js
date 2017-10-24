import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: null || 0,
      paused: true,
      minutes: null || 0
    };

    this.startStopwatch = this.startStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
    this.pauseTime = this.pauseTime.bind(this);

    this.seconds = null;
    this.mins = null;
  }


  startStopwatch() {
    if(!this.seconds) {
      this.seconds = setInterval(() => { this.updateTime() }, 100);
      this.mins = setInterval(() => { this.updateMins() }, 10000 * 6);
    }
  }

  updateMins() {
    this.setState({
      minutes: this.state.minutes + 1,
      seconds: 0,
      paused: false
    })
  }

  updateTime() {
    this.setState({
      seconds: this.state.seconds + .1,
      paused: false
    })  
  }

  pauseTime() {
    let paused = !this.state.paused;
    if (paused) {
      this.resetInterval()
      this.setState({
        paused: paused
      })  
    } else {
      this.startStopwatch();
    }
  }

  resetInterval() {
    clearInterval(this.seconds);
    clearInterval(this.mins);
    this.seconds = null;
    this.mins = null;
  }


  resetStopwatch() {
    this.resetInterval()
    this.setState({
      seconds: 0,
      paused: true,
      minutes: 0
    })
  }


  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.minutes} : {this.state.seconds.toFixed(1)}</h1>
        <div className="controls">
          <button onClick={this.resetStopwatch}>Reset</button>
          <button onClick={this.startStopwatch}>Start</button>
          <button onClick={this.pauseTime}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
