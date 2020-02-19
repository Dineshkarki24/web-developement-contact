import React from "react";

export default class ContactList extends React.Component {
  state = {
    number: 0,
    isShowing: false
  };
  handleIncrement = () => {
    console.log("click");
    // this.state.number = 1; (direct mutation)
    this.setState({ number: this.state.number + 10 });
  };
  handleShowHide = () => {
    this.setState({ isShowing: !this.state.isShowing });
  };
  componentWillUnmount() {}
  render() {
    console.log(this);
    return (
      <div>
        {/* <h1>Your Number is : {this.state.number} </h1>
        <button onClick={this.handleIncrement}>Increment</button> */}

        <div className="card w-50 my-5 mx-auto">
          <div className="card-header">
            <h1>
              <i
                onClick={this.handleShowHide}
                class="fas fa-sort-down mr-3"
              ></i>
              {this.props.contact.name}
            </h1>
          </div>
          {this.state.isShowing ? (
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">{this.props.contact.email}</li>
                <li className="list-group-item">{this.props.contact.phone}</li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
