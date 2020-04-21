import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "./state/action-creators";

import LoginForm from "./components/login-form";
import Users from "./components/users";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/">
        <LoginForm />
      </Route>
      <Route path="/logged">
        <Users />
      </Route>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { formValues: state.formValues };
};

export default connect(mapStateToProps, actionCreators)(App);
