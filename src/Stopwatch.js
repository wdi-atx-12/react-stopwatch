import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: null || 0,
      paused: true
    };

    this.startStopwatch = this.startStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
    this.pauseTime = this.pauseTime.bind(this);

    this.timer = null;
  }


  startStopwatch() {
    if(!this.timer) {
      this.timer = setInterval(() => { this.updateTime() }, 1000);
    }
  }

  updateTime() {
    this.setState({
      seconds: this.state.seconds + 1,
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
    clearInterval(this.timer);
    this.timer = null;
  }


  resetStopwatch() {
    this.resetInterval()
    this.setState({
      seconds: 0,
      paused: true
    })
  }



  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.seconds}</h1>
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
