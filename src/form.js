import React from "react";
import uuid from "uuid";
import "./form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      errror: {}
    };
    // this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleTextChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  // handlePhoneChange(e) {
  //   this.setState({ phone: e.target.value });
  // }
  handleSubmit = e => {
    e.preventDefault();

    const { name, email, phone } = this.state;
    if (name == "") {
      this.setState({ errror: { name: "Please Enter Your Name" } });
      return;
    }
    if (phone == "") {
      this.setState({ errror: { phone: "Please Enter Your Phone Number" } });
      return;
    }
    if (email == "") {
      this.setState({ errror: { email: "Please Enter Your Email" } });
      return;
    }
    this.props.add({ ...this.state, id: uuid() });
    this.setState({
      name: "",
      phone: "",
      email: "",
      errror: {}
    });
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleTextChange}
            placeholder="Name"
          />
          {this.state.errror && (
            <div className="alert-warning">{this.state.errror.name}</div>
          )}
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            value={this.state.phone}
            onChange={this.handleTextChange}
          />
          {this.state.errror && (
            <div className="alert-warning">{this.state.errror.phone}</div>
          )}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleTextChange}
            placeholder="Email"
          />
          {this.state.errror && (
            <div className=" alert-warning">{this.state.errror.email}</div>
          )}
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default Form;
