import * as types from "./action-types";
import axios from "axios";

export const inputChange = (e) => (dispatch) => {
  const key = e.target.name;
  const input = e.target.value;
  dispatch({ type: types.INPUT_CHANGE, payload: { key: key, input: input } });
};

export const onLogin = (values, history) => (dispatch) => {
  dispatch({ type: types.LOGIN });
  axios
    .post("http://localhost:7000/api/login", values)
    .then((res) => {
      history.push("/logged");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetch = (url) => (dispatch) => {
  dispatch({ type: types.FETCH });
  axios.get(url);
};
