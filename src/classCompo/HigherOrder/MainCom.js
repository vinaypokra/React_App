import React, { Component } from "react";

export default function UpdateCompo(Original) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
      this.inc_count = this.inc_count.bind(this);
    }
    inc_count() {
      this.setState((pre) => {
        return { count: pre.count + 1 };
      });
    }

    render() {
      return <Original count={this.state.count} inc_count={this.inc_count} />;
    }
  };
}
