import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {
  handlePush = () => {
    console.log(this.props);
    this.props.history.replace("/contact");
  };
  render() {
    return (
      <nav
        onClick={this.handlePush}
        className="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "slateblue", color: "#fff" }}
      >
        <a className="navbar-brand text-white" href="#">
          {this.props.title}
        </a>
        <Link to="/" className="navbar-brand text-white">
          Home
        </Link>
        <Link to="/contact" className="navbar-brand text-white">
          Contact
        </Link>
        <Link to="/product" className="navbar-brand text-white">
          Product
        </Link>
      </nav>
    );
  }
}
export default withRouter(Navbar);
