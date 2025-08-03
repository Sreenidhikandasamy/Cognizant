import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  };
decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
 sayHello = () => {
    alert("Hello! Member: " + (this.state.count + 1));
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  // Synthetic event handler
  handleClick = (e) => {
    console.log("Synthetic Event Type:", e.type);
    alert("I was clicked!");
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
       
        <br /><br />
         <button onClick={this.decrement}>Decrement</button>
         <br /><br />
        <button onClick={() => this.sayWelcome("Welcome!")}>Say Welcome</button>

        <br /><br />

        <button onClick={this.handleClick}>Click On Me</button>

        <br /><br />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
