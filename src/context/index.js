import React, { Component } from "react";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    count: 0
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          increment: this.increment
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
