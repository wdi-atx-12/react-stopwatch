import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props) {
  	super(props);
  	this.state={
  	  seconds: 0,
  	  time: 0
  	};

  	this.startWatch=this.startWatch.bind(this);
  	this.pauseWatch=this.pauseWatch.bind(this);
  	this.resetWatch=this.resetWatch.bind(this);


  	this.count=()=>{
  	  this.setState({
  	  	seconds: this.state.seconds + 1
  	  })
  	}
  }


  startWatch(e) {
  	e.preventDefault();
  	this.setState({
  	  time: setInterval(this.count, 1000)
  	})
  }

  pauseWatch(e) {
  	e.preventDefault();
  	clearInterval(this.state.time);
  }

  resetWatch(e) {
    e.preventDefault();
    clearInterval(this.state.time);
    this.setState({
      seconds: 0
    })
  };



  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.seconds}</h1>
        <div className="controls">
          <button type='button' onClick={this.resetWatch}>Reset</button>
          <button type='button' onClick={this.startWatch}>Start</button>
          <button type='button' onClick={this.pauseWatch}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
