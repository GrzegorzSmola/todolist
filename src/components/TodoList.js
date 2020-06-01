import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <section>
        <h2>TODO LIST</h2>
        <TodoItem />
      </section>
    );
  }
}
