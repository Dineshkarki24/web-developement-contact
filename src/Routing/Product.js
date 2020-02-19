import React from "react";
import PropTypes from "prop-types";
const Prodect = props => {
  return <h1>Product id:{props.match.params.id}</h1>;
};
Prodect.propTypes = {
  name: PropTypes.string,
  contact: PropTypes.func
};

export default Prodect;
