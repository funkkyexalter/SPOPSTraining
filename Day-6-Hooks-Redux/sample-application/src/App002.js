import React, { useState } from 'react'
 
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div>
        <p> You have clicked {this.state.count} times </p>
        <button onClick={() => this.setState({ count:this.state.count + 1})}> Click Me </button>
      </div>
    );
  }
}
 
export default App;