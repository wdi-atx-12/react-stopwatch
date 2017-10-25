import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this.autoBind();
  }

  autoBind() {
    for(let m in this) {
      if(typeof(this[m])==='function' && m.match(/_\w+/)) {
        this[m] = this[m].bind(this)
      }
    }
  }

  _onReset(e) {

  }

  _onStart(e) {

  }

  _onPause(e) {

  }

  render() {
    return (
      <div className="stopwatch">
        <h1>0</h1>
        <div className="controls">
          <button onReset={this._onReset}>Reset</button>
          <button onStart={this._onStart}>Start</button>
          <button onPause={this._onPause}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
