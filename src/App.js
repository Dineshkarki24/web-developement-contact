import React from "react";
import Form from "./form";
// import Navbar from "./compontent/Navbar";
import Contact from "./compontent/contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
// import RefForm from "./compontent/UncontrollC";
// import Toggle from "./Hooks/toggle";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contact: [],
      loading: false
    };
    console.log("Constructor called");
  }

  handleDelete = async id => {
    // const del = this.state.contact.filter(contact => contact._id !== id);
    // this.setState({ contact: del });
    let res = await Axios.delete(`http://localhost:5000/api/v1/contacts/${id}`);
    console.log(res);
    if (res.status === 200) {
      this.getContact();
    }
  };
  handleAdd = async addData => {
    // console.log(addData);
    // this.setState({ contact: [...this.state.contact, addData] });
    let res = await Axios.post(
      "http://localhost:5000/api/v1/contacts",
      addData
    );
    // {name:'',email:'',phone:''}
    console.log(res);
    if (res.status === 201) {
      this.getContact();
    }
  };
  handleEdit = data => {
    // Editing Data
    let updata = this.state.contact.map(contact => {
      if (contact.id == data.id) {
        return data;
      }
      return contact;
    });
    this.setState({ contact: updata }); //Updating state
  };
  componentDidMount() {
    this.getContact();
  }
  getContact = async () => {
    let response = await Axios.get("http://localhost:5000/api/v1/contacts");
    console.log(response);
    this.setState({ contact: response.data.data });
  };
  componentDidUpdate(prevProps, prevStateaAaA) {
    console.log("Update");
  }

  render() {
    // let arr = [1, 2, 3];
    // let arr2 = [arr, 1, 2, 3];
    // console.log(arr2);
    console.log("Render called");
    return (
      <div>
        {/* <Navbar title="Contact Management" /> */}
        {/* <RefForm />
        <Toggle /> */}
        <Form title="Contact Form" add={this.handleAdd} />
        {this.state.contact.map(contacts => (
          <Contact
            key={contacts._id}
            delete={this.handleDelete}
            contact={contacts}
            edit={this.handleEdit}
          />
        ))}
      </div>
    );
  }
}

export default App;
