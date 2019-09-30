import { createAction, handleActions } from "redux-actions";

const ONCHANGE = "signup/ONCHANGE";
const ALERT = "signup/ALERT";
const TEXT = "signup/TEXT";
const SUCCESS = "signup/SUCCESS";
const LOADING = "signup/LOADING";
const DISABLE = "signup/DISABLE";

export const changeInputs = createAction(ONCHANGE, inputs => inputs);
export const createAlert = createAction(ALERT, res => res);
export const changeText = createAction(TEXT, text => text);
export const success = createAction(SUCCESS, suc => suc);
export const loading = createAction(LOADING, loading => loading);
export const disable = createAction(DISABLE, disable => disable);
const initialState = {
  alert: false,
  isSuccess: false,
  text: "",
  inputs: {
    email: "",
    emailCheck: "",
    name: ""
  },
  isLoading: false,
  disable: false
};

export default handleActions(
  {
    [ONCHANGE]: (state, action) => ({
      ...state,
      inputs: action.payload
    }),
    [ALERT]: (state, action) => ({
      ...state,
      alert: action.payload
    }),
    [TEXT]: (state, action) => ({
      ...state,
      text: action.payload
    }),
    [SUCCESS]: (state, action) => ({
      ...state,
      isSuccess: action.payload
    }),
    [LOADING]: (state, action) => ({
      ...state,
      isLoading: action.payload
    }),
    [DISABLE]: (state, action) => ({
      ...state,
      disable: action.payload
    })
  },
  initialState
);
