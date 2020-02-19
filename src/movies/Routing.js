import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import SingleMoviesPage from "./SingleMovies";
class Routing extends Component {
  state = {
    movie: {}
  };
  recMovies = movie => {
    console.log(movie);
    this.setState({ movie });
  };
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            render={props => <Home {...props} movie={this.recMovies} />}
          />
          <Route
            path="/singleMoves/:id"
            render={() => <SingleMoviesPage movie={this.state.movie} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routing;
