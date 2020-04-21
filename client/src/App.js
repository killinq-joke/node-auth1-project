import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "./state/action-creators";

import LoginForm from "./components/login-form";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/">
        <LoginForm />
      </Route>
      <Route path="logged"></Route>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { formValues: state.formValues };
}

export default connect(mapStateToProps, actionCreators)(App);
