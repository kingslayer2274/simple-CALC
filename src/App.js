import React, { Component } from "react";
import NumPad from "./NumPad";
import Display from "./Display";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: 0,
      opr: "",
      first: 0,
      second: 0
    };
  }

  onNumberPressed = value => {
    if (this.state.input.length > 0) {
      this.setState({
        input: String(this.state.input) + String(value)
      });
    } else {
      this.setState({
        input: value
      });
    }
  };
  onOperatorPressed = opr => {
    this.setState({
      first: this.state.input,
      input: "",
      opr: opr
    });
  };

  onEqualPressed = () => {
    let { first, input, opr } = this.state;
    let answer;
    this.setState({
      second: this.state.input
    });

    switch (opr) {
      case "+":
        answer = Number(first) + Number(input);

        break;
      case "-":
        answer = Number(first) - Number(input);
        break;
      case "/":
        answer = Number(first) / Number(input);
        break;
      case "x":
        answer = Number(first) * Number(input);
        break;

      default:
        console.log("error");
        break;
    }

    this.setState({ input: answer });
  };

  onChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  memory = () => {
    this.setState({
      input: this.state.second
    });
  };

  back = () => {
    this.setState({
      input: this.state.input.slice(0, -1)
    });
  };

  render() {
    return (
      <div>
        <Display input={this.state.input} onChange={this.onChange} />
        <NumPad
          onNumberPressed={this.onNumberPressed}
          onOperatorPressed={this.onOperatorPressed}
          onEqualPressed={this.onEqualPressed}
          memory={this.memory}
          back={this.back}
        />
      </div>
    );
  }
}
export default App;
