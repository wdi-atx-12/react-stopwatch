import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      interval: 0,
      timer: 0
    }
    this._reset = this._reset.bind(this);
    this._start = this._start.bind(this);
    this._pause = this._pause.bind(this);
    this._countUp = () => {
      this.setState({
        timer: this.state.timer+1
      })
    }
  }

  _reset(e){
    e.preventDefault();
    this.setState({
      timer: 0
    })
  }

  _start(e){
    e.preventDefault();
    this.setState({
      interval: setInterval(this._countUp, 1000)
    });
  }

  _pause(e){
    e.preventDefault();
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.timer}</h1>
        <div className="controls">
          <button onClick={this._reset}>Reset</button>
          <button onClick={this._start}>Start</button>
          <button onClick={this._pause}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
