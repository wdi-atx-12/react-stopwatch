import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      pid: null
    };

    this.onReset = (e) => {
      e.preventDefault();
        this.setState({timer: 0});
        console.log("onReset");
        console.log(this.state);
    } // end of onReset()

    this.onStart = (e) => {
      e.preventDefault();
      this.setState({pid: setInterval(this.displayTotal, 1000)});
      console.log("onStart");
      console.log(this.state);
    } // end of onStart()

    this.onPause = (e) => {
      e.preventDefault();
        if(this.state.pid) clearInterval(this.state.pid);
        console.log("onPause");
        console.log(this.state);
    } // end of onPause()

    this.displayTotal = () => {
      var newTimer = this.state.timer + 1;
      this.setState({timer: newTimer});
      console.log("displayTotal");
      console.log(this.state);
    }
  } // end of constructor

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.timer }</h1>
        <div className="controls">
          <button onClick={this.onReset}>Reset</button>
          <button onClick={this.onStart}>Start</button>
          <button onClick={this.onPause}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
