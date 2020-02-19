import React from "react";
import Navbar from "./Navbar";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
class App extends React.Component {
  state = {
    contact: [
      { id: 1, name: "Ram", phone: 676774, email: "ram@gmail.com" },
      { id: 2, name: "Ramhari", phone: 676774, email: "ramhari@gmail.com" },
      { id: 3, name: "kaji", phone: 676774, email: "kaji@gmail.com" }
    ]
  };
  render() {
    let users = {
      id: 1,
      name: "dinesh",
      phone: 65465654
    };
    console.log(this.state.hello);
    return (
      <div>
        <Navbar title="Contact management System" client={users} />
        <ContactForm />
        {this.state.contact.map(contact => {
          return <ContactList contact={contact} />;
        })}
      </div>
    );
  }
}

export default App;
