import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import * as actionCreators from "../state/action-creators";

const LoginForm = ({formValues, inputChange, onLogin}) => {
  const history = useHistory();
  return (
    <div>
      <form>
        <label>
          username
          <input
            name="username"
            onChange={inputChange}
            value={formValues.username}
          />
        </label>
        <label>
          password
          <input
            name="password"
            onChange={inputChange}
            type="password"
            value={formValues.password}
          />
        </label>
        <button type="button" onClick={(evt) => onLogin(formValues, history)}>
          login
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    formValues: state.formValues,
  };
};

export default connect(mapStateToProps, actionCreators)(LoginForm);
