import React from "react";
const Contacts = props => {
  function handleClick() {
    // props.history.push("/");
    props.history.replace("/");
  }
  return (
    <>
      <h2>Id</h2>
      <button onClick={handleClick}>Click</button>
      <h1>Contact</h1>
    </>
  );
};

export default Contacts;
