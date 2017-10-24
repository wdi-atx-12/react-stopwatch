import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props){
    super(props);
    this.state={
      count: null
    };
    this.going = null;
    this._contare = this._contare.bind(this);
    this._fermare = this._fermare.bind(this);
    this._reIniziare = this._reIniziare.bind(this);

  }
  _contare(){
    this.setState({
      count: this.state.count+1 ||0
    })
  }

  _fermare(){

  }
  _reIniziare(){
    this.setState({
      count: 0
    })

  }
  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.count}</h1>
        <div className="controls">
          <button onClick={this._reIniziare}>Reset</button>
          <button onClick={(event)=>{this.going = setInterval(this._contare, 1000)}}>Start</button>
          <button onClick={(event)=>{clearInterval(this.going)}}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
