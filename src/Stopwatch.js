import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      interval: 0,
      piTimer: 0
    }


    this.Reset = this.Reset.bind(this);
    this.Pause = this.Pause.bind(this);
    this.Start = this.Start.bind(this);
    this.timerAdjust= () =>{
      this.setState({
        timer: this.state.timer + 1,
        piTimer: this.state.piTimer + 3.14159265359,

      })
    }
  };


  Reset(event) {
    event.preventDefault ();
    this.setState({
      timer: 0,
      piTimer: 0
    })
  };


  Pause(event) {
    event.preventDefault ();
    clearInterval(this.state.interval)
  };


  Start(event) {
    event.preventDefault();
    this.setState({
      interval: setInterval(this.timerAdjust, 1000)
    })
  };



  render() {
    return (

      <div className="stopwatch">
        <h1>{this.state.piTimer} seconds times Pi</h1>
        <h1>{this.state.timer} seconds</h1>
        <div className="controls">
          <button type="button" onClick={this.Reset}>Reset</button>
          <button type="button" onClick={this.Start}>Start</button>
          <button type="button" onClick={this.Pause}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;


