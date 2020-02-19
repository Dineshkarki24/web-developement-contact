import React from "react";
import Contact from "./Contact";
import Home from "./Home";
import Prodect from "./Product";
import { Route, Switch, Redirect } from "react-router-dom";
import Not from "./NotFoundPage";
import Navbar from "../compontent/Navbar";
const Main = () => {
  return (
    <React.Fragment>
      <Navbar name="ndnaika" />
      <Switch>
        <Route path={["/", "/home"]} exact component={Home} />
        <Route
          path="/contact"
          render={props => <Contact name="tyagggd" {...props} />}
        />
        <Route path="/product:id" component={Prodect} />
        <Route path="/not" component={Not} />
        <Redirect to="/not" />
      </Switch>
    </React.Fragment>
  );
};

export default Main;
