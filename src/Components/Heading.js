import React, { Component } from 'react';



class Heading extends Component {
  render() {
    return (
      <div className="Heading">
        <h1>Hello From Heading {this.props.to} Ali {this.props.p}</h1>
      </div>
    );
  }
}

export default Heading;
