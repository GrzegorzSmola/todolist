import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    return (
      <div className="card cart-body my3">
        <form onSubmit={this.props.handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add todo item"
              onChange={this.props.handleChange}
              value={this.props.item}
            />
          </div>
          <button
            type="submit"
            disabled={!this.props.item.length}
            className={
              this.props.editItem
                ? "btn btn-block btn-success mt-3 text-uppercase"
                : "btn btn-block btn-primary mt-3 text-uppercase"
            }
            onClick={this.props.handleSubmit}
          >
            {this.props.editItem ? "Edit item" : "Add item"}
          </button>
        </form>
      </div>
    );
  }
}
