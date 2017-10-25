import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props){
    super(props);
    this.state = {
      timer: 0,
    }
    this.reset = this.reset.bind(this);
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.counter = () => {
      this.setState({
        timer: this.state.timer + 1
      })
    }
  }


  startTimer(e){
    e.preventDefault();
  }
  stopTimer(e){
    e.preventDefault();
  }
  resetTimer(e){
    e.preventDefault();
  }

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.timer}</h1>
        <div className="controls">
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.start}>Start</button>
          <button onClick={this.pause}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
