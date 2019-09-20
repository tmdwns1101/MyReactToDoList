import { createAction, handleActions } from "redux-actions";
import moment from "moment";

const DONE_CHECK = "todolist/DONE_CHECK";
const DELETE_CHECK = "todolist/DELETE_CHECK";
const INPUT_CHANGE = "todolist/INPUT_CHANGE";
const DATE_CHANGE = "todolist/DATE_CHANGE";
const CREATE = "todolist/CREATE";
const CREATE_BOX_TOGGLE = "/todolist/CREATE_BOX_TOGGLE";
const ISANIMATED = "todolist/ISANIMATED";
let id = 2;

export const doneCheck = createAction(DONE_CHECK, id => id);
export const deleteCheck = createAction(DELETE_CHECK, id => id);
export const inputChange = createAction(INPUT_CHANGE, text => text);
export const dateChange = createAction(DATE_CHANGE, date => date);
export const create = createAction(CREATE, object => ({
  id: id++,
  text: object.text,
  date: object.date
}));
export const createBoxToggle = createAction(
  CREATE_BOX_TOGGLE,
  toggle => toggle
);
export const isAnimated = createAction(ISANIMATED, id => id);

const initState = {
  today: moment(),
  text: "",
  open: false,
  date: moment().format("YYYY-MM-DD"),
  todoList: [
    {
      id: 1,
      text: "투두리스트 UI 만들기",
      date: "2019-09-20",
      done: true,
      deleted: false,
      isAnimated: false
    }
  ]
};

export default handleActions(
  {
    [CREATE]: (state, action) => ({
      ...state,
      todoList: state.todoList.concat({
        id: action.payload.id,
        text: action.payload.text,
        date: action.payload.date,
        done: false,
        deleted: false
      })
    }),
    [DONE_CHECK]: (state, action) => ({
      ...state,
      todoList: state.todoList.map(elem =>
        elem.id === action.payload ? !elem.done : elem
      )
    }),
    [DELETE_CHECK]: (state, action) => ({
      ...state,
      todoList: state.todoList.map(elem =>
        elem.id === action.payload
          ? { ...elem, deleted: !elem.deleted, done: true }
          : elem
      )
    }),
    [INPUT_CHANGE]: (state, action) => ({
      ...state,
      text: action.payload
    }),
    [DATE_CHANGE]: (state, action) => ({
      ...state,
      date: action.payload
    }),
    [CREATE_BOX_TOGGLE]: (state, action) => ({
      ...state,
      open: action.payload
    }),
    [ISANIMATED]: (state, action) => ({
      ...state,
      todoList: state.todoList.map(elem =>
        elem.id === action.payload ? !elem.isAnimated : elem
      )
    })
  },
  initState
);
