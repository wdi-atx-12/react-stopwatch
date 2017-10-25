import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props){
    super(props);
      this.stopTime = this.stopTime.bind(this);
      this.startTimer = this.startTimer.bind(this);
      this.pauseTimer = this.pauseTimer.bind(this);
      this.resetTimer = this.resetTimer.bind(this);

      this.state = {
        currentTime: 0,
        stopTime: null
      };

  }
  updateWatch(time){
    var display = document.getElementById('#watch');
    display.innerHTML = 'time: '+time;
  }
  startTimer(x){
    if(!stopTime){
      var currentTime = x;
      currentTime++;
      this.setState({ currentTime: currentTime});

      //call updateWatch to update the watch display
      updateWatch(x);
      //wait a second then call me again until my state of stopTime is true
      setTimeout(startTimer(x), 1000);
    } else {
      console.log('stopTime is true');
    }
  }
  pauseTimer(){
    if(!stopTime){
       stopTime = true
     }else if(stopTime){
       stopTime = false
     } else {
      console.log('look, I am just a broken pause button.');
     }

  }
  resetTimer(){
    currentTime = 0;
    updateWatch(currentTime);
  }
  render() {
    return (
      <div className="stopwatch">
        <h1 id="watch">0</h1>
        <div className="controls">
          <button onClick={this.resetTimer}>Reset</button>
          <button onClick={this.startTimer}>Start</button>
          <button onclick={this.pauseTimer}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
