import React, { Component } from "react";
import Axios from "axios";

class Api extends Component {
  state = {};
  componentDidMount() {
    Axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=id&q=tuto&type=video&key=${"AIzaSyD6aVrromTpANfl4nkMc8qgiDHEGefme8"}`
    ).then(res => console.log(res));
  }
  render() {
    return <h1>Hello</h1>;
  }
}

export default Api;
