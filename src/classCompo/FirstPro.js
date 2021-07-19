import React, { Component } from "react";

class SecPro extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>{this.props.message}</h2>
      </div>
    );
  }
}

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  inc_count() {
    this.setState({ count: this.state.count + 1 }, () => console.log("count value : " + this.state.count + " "));
  }
  inc_count_five() {
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => console.log("count value : " + this.state.count + " ")
    );
  }
  inc_five_time() {
    this.inc_count_five();
    this.inc_count_five();
    this.inc_count_five();
    this.inc_count_five();
    this.inc_count_five();
  }

  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={() => this.inc_five_time()}>Inc</button>
      </div>
    );
  }
}

class Child extends Component {
  render() {
    return <button onClick={() => this.props.show_message("vinay")}>Click</button>;
  }
}

class FirstPro extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to company",
    };
    this.change_message = this.change_message.bind(this);
    this.show_message = this.show_message.bind(this);
  }
  change_message() {
    this.setState({ message: "thank you" });
  }
  show_message(name) {
    alert(`hello ${name}`);
  }
  render() {
    return (
      <div>
        <Child show_message={this.show_message} />
        {/* <SecPro message={this.state.message} name={"vinay pokra"} />
        <button onClick={() => this.change_message()}>Click Me</button>
        <button onClick={this.change_message.bind(this)}>Click Me</button>
        <button onClick={this.change_message}>Click Me</button>
        <Counter /> */}
      </div>
    );
  }
}

export default FirstPro;
