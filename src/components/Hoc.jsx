import React, { Component } from "react";

const hoc = (Comp) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        x: 0
      };
    }

    handleCount = () => {
      this.setState((prevState) => ({
        x: prevState.x + 1
      }));
    };

    render() {
      return <Comp value={this.state.x} increase={this.handleCount} />;
    }
  };
};

export default hoc;
