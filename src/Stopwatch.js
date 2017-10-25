import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this.state={
      interval: 0,
      counter: 0
    };

    this.pause = this.pause.bind(this);
    this.start = this.start.bind(this);
    this.reset = this.reset.bind(this);
    this.myTimer = this.myTimer.bind(this);
  };

  myTimer(){
    this.setState({
      counter: this.state.counter+1
    });
  }

  pause(){
      window.clearInterval(this.state.interval);
  }

  start(){
    this.setState({
      interval: setInterval(this.myTimer, 1000)
     });
  }
  reset(){
    this.setState({
      counter: 0
     });
     window.clearInterval(this.state.interval)
  }

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.counter}</h1>
        <div className="controls">
          <input type="button" value="Pause" onClick={this.pause}/>
          <input type="button" value="Start" onClick={this.start}/>
          <input type="button" value="Reset" onClick={this.reset}/>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
