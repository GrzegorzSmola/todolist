import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {this.props.items.map((item, ind) => (
          <TodoItem
            key={item.id}
            handleDelete={() => this.props.handleDelete(item.id)}
            handleEdit={() => this.props.handleEdit(item.id)}
          >
            {item.title}
          </TodoItem>
        ))}
        <button
          className="btn btn-danger btn-block text-uppercase mt-5"
          onClick={this.props.clearList}
        >
          Clear list
        </button>
      </ul>
    );
  }
}
