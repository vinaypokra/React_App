import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";
class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "vinay",
    };
    console.log("LifeCycleA  Super");
  }
  static getDerivedStateFromProps() {
    console.log("LifeCycleA  getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA  componentDidMount");
  }

  render() {
    console.log("LifeCycleA  render");
    return (
      <div>
        <h1>LifeCycleA</h1>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
