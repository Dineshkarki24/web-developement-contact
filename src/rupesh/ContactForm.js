import React from "react";

class ContactForm extends React.Component {
  render() {
    return (
      <div className="card w-50 mx-auto my-5">
        <div className="card-header">
          <h1>Contact Form</h1>
        </div>
        <div className="card-body">
          <form action="">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone</label>
              <input
                type="number"
                className="form-control"
                placeholder="Phone Number"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default ContactForm;
