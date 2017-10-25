import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this._onReset = this._onReset.bind(this);
    this._onStart = this._onStart.bind(this);
    this._onPause = this._onPause.bind(this);

    this.state = {
      interval: null,
      timer: 0
    }
  }

  _onReset(e) {
    clearInterval(this.state.interval);
    this.setState({
      timer: 0
    })
  }

  _onStart(e) {
    this.setState({
      interval: setInterval(() => {
          this.setState({
            timer: this.state.timer + 1
          });
        }, 1000)
    })
  }

  _onPause(e) {
    console.log('pause');
  }

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.timer}</h1>
        <div className="controls">
          <button onClick={this._onReset}>Reset</button>
          <button onClick={this._onStart}>Start</button>
          <button onClick={this._onPause}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
