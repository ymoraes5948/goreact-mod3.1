import React, { Component, Fragment } from "react";

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository} />
      </Fragment>
    );
  }
}
