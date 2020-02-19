import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    console.log("Constructor callled");
  }
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then(res => res.json())
    //   .then(response => this.setState({ data: response }));
    axios("https://jsonplaceholder.typicode.com/posts")
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err));
  }
  static getDerivedStateFromProps(props, state) {
    console.log(props, state);
  }
  render() {
    console.log(this.state.data);
    return (
      <>
        {/* {this.state.data.map(data => (
          <h2>{data.title}</h2>
        ))} */}
        <h1>Home Page</h1>
      </>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  dob: PropTypes.number,
  calculateSalary: PropTypes.func
};
export default Home;
