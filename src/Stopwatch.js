import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    }
    this.stopwatch = null
    this._reset = this._reset.bind(this)
    this._start = this._start.bind(this)
    this._stop = this._stop.bind(this)
  }

  _stop(e) {
    clearInterval(this.stopwatch);
  }

  _start(e) {
    e.preventDefault()
    this.stopwatch = setInterval(() => {
      this.setState({
        time: this.state.time+1
      })
    }, 1000);
  }


  _reset(e) {
    e.preventDefault()
    this.setState({
      time: 0
    })
    console.log(this.state.time);
  }
  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.time}</h1>
        <div className="controls">
          <button onClick={this._reset}>Reset</button>
          <button onClick={this._start}>Start</button>
          <button onClick={this._stop}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
