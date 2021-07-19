import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "vinay",
    };
    console.log("LifeCycleB  Super");
  }
  static getDerivedStateFromProps() {
    console.log("LifeCycleB  getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleB  componentDidMount");
  }

  render() {
    console.log("LifeCycleB  render");
    return (
      <div>
        <h1>LifeCycleB</h1>
      </div>
    );
  }
}

export default LifeCycleB;
