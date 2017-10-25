import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props){
    super(props);
    this.state={
      count: null
    };
    this._contare = this._contare.bind(this);
    this._reIniziare = this._reIniziare.bind(this);
    this._fermare = this._fermare.bind(this);

  }
  _contare(event){
    if(this.going){
      event.preventDefault();
      clearInterval(this.going); 
    }
      this.going = setInterval(()=>{
        this.setState({
          count: this.state.count + 1 || 0
        })
      }, 1000)
  }

  _reIniziare(){
    this.setState({
      count: 0
    })
  }
  _fermare(){
    clearInterval(this.going);
  }
  
  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.count}</h1>
        <div className="controls">
          <button onClick={this._reIniziare}>Reset</button>
          <button onClick={this._contare}>Start</button>
          <button onClick={this._fermare}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
