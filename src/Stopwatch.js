import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      interval: 0
    }
    this.Reset = this.Reset.bind(this);
    this.Pause = this.Pause.bind(this);
    this.Start = this.Start.bind(this);
    this.changeTimer = () =>{
      this.setState({
        timer: this.state.timer + 1
      })
    }
  }

  Reset(e) {
    e.preventDefault();
    this.setState({
      timer: 0
    })
  };

  Pause(e) {
    e.preventDefault();
    clearInterval(this.state.interval);
  }

  Start(e) {
    e.preventDefault();
    this.setState({
      interval: setInterval(this.changeTimer, 1000)
    })
  }

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.timer}</h1>
        <div className="controls">
          <button type='button' onClick={this.Reset}>Reset</button>
          <button type='button' onClick={this.Start}>Start</button>
          <button type='button' onClick={this.Pause}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
