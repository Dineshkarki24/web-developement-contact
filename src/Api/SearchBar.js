import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: "Default Text"
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form action="" onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label htmlFor="video-search">Video Search</label>
            <input
              type="text"
              name="term"
              value={this.state.term}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
