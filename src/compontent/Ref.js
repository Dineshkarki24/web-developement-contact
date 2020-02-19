import React, { Component } from "react";
import { ProductConsumer } from "../context";

class Ref extends Component {
  //   constructor() {
  //     super();
  //     this.inputEmailChange = React.createRef();
  //     this.inputNameChange = React.createRef();
  //   }
  //   static defaultProps = {
  //     name: "",
  //     email: ""
  //   };
  //   handleSubmit = e => {
  //     e.preventDefault();
  //     console.log(this.inputEmailChange.current.value);
  //   };
  render() {
    return (
      <ProductConsumer>
        {value => {
          console.log(value);
          return <button onClick={() => value.increment()}>increment</button>;
        }}
      </ProductConsumer>
    );
  }
}

export default Ref;
