import React from "react";
import "./CounterClass.css";

// то же самое на классах
// Все классы экстендятся от Реакт

export class CounterClass extends React.Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div className="Counter">
        <span>{this.state.counter}</span>
        <button onClick={this.handleClick} className="Counter-button">
          Click me! Class
        </button>
      </div>
    );
  }
}
