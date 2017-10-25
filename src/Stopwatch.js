import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: 0,
      interval: 0
    }
    this._resetTime = this._resetTime.bind(this);
    this._startTime = this._startTime.bind(this);
    this._pauseTime = this._pauseTime.bind(this);
  }

  _resetTime(e){
    this.setState ({
      time: 0
    })
  }

  _startTime(e){
    this.changeTime = () => {
      this.setState({
        time: this.state.time + 1
      })
    }
    this.setState ({
        interval: setInterval(this.changeTime, 1000)
    })
  }

  _pauseTime(e){
    clearInterval(this.state.interval)
  }

  render() {
    var time = this.state.time;

    return (
      <div className="stopwatch">
        <h1>{time}</h1>
        <div className="controls">
          <button onClick={this._resetTime}>Reset</button>
          <button onClick={this._startTime}>Start</button>
          <button onClick={this._pauseTime}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
