import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between mt-2">
        <h6>{this.props.children}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={this.props.handleEdit}>
            <i className="fas fa-pen" />
          </span>
          <span className="mx-2 text-danger" onClick={this.props.handleDelete}>
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}
