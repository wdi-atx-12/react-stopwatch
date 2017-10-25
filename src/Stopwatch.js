import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.state = {
      currentTime: 0
    }
    this.running = null;

  }

  startTimer() {
    this.setState({
      currentTime: this.state.currentTime + 1
    })
  }

  pauseTimer() {
    console.log("pause");
    clearInterval(this.state.currentTime);
  }

  resetTimer(e) {
    this.setState({
      currentTime: 0
    })
    clearInterval(this.running);
  }

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.currentTime}</h1>
        <div className="controls">
          <button onClick={this.resetTimer}>Reset</button>
          <button onClick={() => {this.running = setInterval(this.startTimer, 1000)}}>Start</button>
          <button onClick={()=> clearInterval(this.running)}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
