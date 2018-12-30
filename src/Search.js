import React, { Component } from "react";
import "./Search.css";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  _handleChange(event) {
    this.setState({ value: event.target.value });
  }

  _submit(event) {
    event.preventDefault();
    this.props.refresh(this.state.value);
  }

  render() {
    return (
      <form onClick={event => this._submit(event)}>
        <input
          type="search"
          placeholder="Enter a city"
          autoComplete="off"
          autoFocus="on"
          onChange={event => this._handleChange(event)}
          value={this.state.value}
          className="search-box"
        />
        <input type="submit" value="Search" className="search-btn" />
      </form>
    );
  }
}
