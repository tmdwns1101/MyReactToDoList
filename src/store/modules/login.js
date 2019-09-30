import { createAction, handleActions } from "redux-actions";

const LOGIN = "login/LOGIN";
const SETUSER = "login/SETUSER";
const FAIL = "login/FAIL";
const LOADING = "login/LOADING";
const INPUT_CHANGE = "login/ INPUT_CHANGE";

export const loginAction = createAction(LOGIN, logged => logged);
export const setUser = createAction(SETUSER, userInfo => userInfo);
export const onFail = createAction(FAIL, fail => fail);
export const loading = createAction(LOADING, loading => loading);
export const inputChange = createAction(INPUT_CHANGE, input => input);
const initialState = {
  logged: false,
  userID: "",
  isLoading: false,
  isFail: false,
  input: ""
};

export default handleActions(
  {
    [SETUSER]: (state, action) => ({
      ...state,
      userID: action.payload
    }),
    [LOGIN]: (state, action) => ({
      ...state,
      logged: action.payload
    }),
    [FAIL]: (state, action) => ({
      ...state,
      isFail: action.payload
    }),
    [LOADING]: (state, action) => ({
      ...state,
      isLoading: action.payload
    }),
    [INPUT_CHANGE]: (state, action) => ({
      ...state,
      input: action.payload
    })
  },
  initialState
);
