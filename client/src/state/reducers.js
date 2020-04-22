import * as types from "./action-types";

const initialFormValues = {
  username: "",
  password: "",
};

export function formReducer(state = initialFormValues, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
      const { key, input } = action.payload;
      return {
        ...state,
        [key]: input,
      };
    default:
      return state;
  }
}
