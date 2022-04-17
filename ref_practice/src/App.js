import React, { Component } from 'react';
import RefSample2 from './RefSample2';

class App extends Component {
  render() {
    return (
      <div>
        <RefSample2 ref={(ref)=>this.a=ref}></RefSample2>
        <button onClick={()=>this.a.boxDown()}>ddddd</button>
      </div>
    );
  }
}

export default App;
