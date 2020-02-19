import React from "react";
import { link } from "fs";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSHowing: false,
      isEditing: false,
      name: this.props.contact.name,
      email: this.props.contact.email,
      phone: this.props.contact.phone,
      id: this.props.contact._id
    };
  }
  componentWillUnmount() {
    console.log("WillUnMount Called");
  }
  handleTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleShowHide = () => {
    this.setState({ isSHowing: !this.state.isSHowing });
  };
  handleEdit = e => {
    e.preventDefault();
    let editdata = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      id: this.state.id
    };
    this.props.edit(editdata);
    this.setState({ isEditing: false });
  };
  render() {
    const style = {
      width: "40%"
    };
    let cls = "mr-3 fas fa-";
    cls += this.state.isSHowing ? "minus" : "plus";
    const { isEditing } = this.state;
    let output;
    if (isEditing) {
      output = (
        <div>
          <form action="" onSubmit={this.handleEdit}>
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
            <button>Edit</button>
          </form>
        </div>
      );
    } else {
      output = (
        <div>
          <div className="card  mt-5 mb-3 ml-auto mr-auto" style={style}>
            <div
              className="card-header text-capitalize "
              style={{ backgroundColor: "slateblue", color: "#fff" }}
            >
              <i className={cls} onClick={this.handleShowHide} />
              {this.props.contact.name}
              <div className="float-right">
                <i
                  className="fas fa-edit mr-3"
                  onClick={() =>
                    this.setState({ isEditing: !this.state.isEditing })
                  }
                />
                <i
                  className="fas fa-trash-alt"
                  onClick={() => this.props.delete(this.props.contact._id)}
                />
              </div>
            </div>
            {this.state.isSHowing ? (
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    {this.props.contact.email}
                  </li>
                  <li className="list-group-item">
                    {this.props.contact.phone}
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      );
    }
    return output;
  }
}
export default Contact;
