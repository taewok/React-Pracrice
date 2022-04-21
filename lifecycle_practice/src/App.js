import React, { Component } from 'react';
import LIfeCycleSample from './LIfeCycleSample';

function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state={
    color:'#000000'
  }

  handleClick = ()=>{
    this.setState({
      color:getRandomColor()
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LIfeCycleSample color={this.state.color}></LIfeCycleSample>
      </div>
    );
  }
}

export default App;
