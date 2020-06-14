import React from "react";

class Layout extends React.Component {
  constructor() {
    super();
    this.name = "Shota";
  }
  render() {
    return (
      <h1>It's {this.name}!</h1>
    );
  }
}

export default Layout;