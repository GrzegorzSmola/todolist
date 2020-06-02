import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false
  };

  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.editItem) {
      const selectedItemInd = this.state.items.findIndex(
        (item) => item.id === this.state.id
      );
      const updatedItem = { id: this.state.id, title: this.state.item };
      let updatedArr = [...this.state.items];
      updatedArr.splice(selectedItemInd, 1, updatedItem);

      this.setState({
        item: "",
        editItem: false,
        id: uuidv4(),
        items: updatedArr
      });
    } else {
      this.setState((prevState) => {
        return {
          item: "",
          editItem: false,
          id: uuidv4(),
          items: [
            ...prevState.items,
            { id: this.state.id, title: this.state.item }
          ]
        };
      });
    }
  };

  clearList = () => {
    this.setState({ items: [] });
  };

  handleEdit = (id) => {
    const selectedItem = this.state.items.find((item) => item.id === id);

    console.log(this.state.items);
    this.setState({
      item: selectedItem.title,
      id: id,
      editItem: true
    });
  };

  handleDelete = (id) => {
    const filteredArr = this.state.items.filter((el) => el.id !== id);
    this.setState({ items: filteredArr });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8mt-5">
            <h3 className="text-capitalized text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
