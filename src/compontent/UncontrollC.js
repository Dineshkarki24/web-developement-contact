import React, { Component } from "react";

class RefForm extends Component {
  constructor() {
    super();
    this.inputNameChange = React.createRef();
    this.inputEmailChange = React.createRef();
  }
  static defaultProps = {
    name: "",
    email: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    let data = {
      name: this.inputNameChange.current.value,
      email: this.inputEmailChange.current.value
    };
    console.log(data);
  };
  render() {
    console.log(this.props);
    return (
      <form action="">
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          name="name"
          defaultValue={this.props.name}
          placeholder="Name"
          ref={this.inputNameChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          defaultValue={this.props.email}
          placeholder="Email"
          ref={this.inputEmailChange}
        />

        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}
// RefForm.defaultProps = {
//   name: "defsgdh",
//   email: ""
// };

export default RefForm;
