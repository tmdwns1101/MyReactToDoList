import * as firebase from "firebase";
import { config } from "./firebaseConfig";
let database;

export const fireInit = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  database = firebase.database();
  //console.log(database);
};

export const getUserInfo = email => {
  return database
    .ref("users/")
    .orderByChild("email")
    .equalTo(`${email}`)
    .once("value");
};

export const registUser = ({ email, name }) => {
  return database.ref("users/").push({
    email: email,
    name: name
  });
};

export const getTodoList = id => {
  //console.log(database);
  try {
    const ref = database.ref(`todolist/${id}/items`).once("value");
    return ref;
  } catch (e) {
    console.log(e);
  }
};

export const createTodo = (id, text, date) => {
  database.ref(`/todolist/${id}/items`).push({
    text: text,
    date: date,
    done: false,
    deleted: false,
    isAnimated: false
  });
};

export const doneTodo = (userID, id, done) => {
  database.ref(`/todolist/${userID}/items/${id}`).update({
    done: !done
  });
};

export const deleteTodo = (userID, id) => {
  database.ref(`/todolist/${userID}/items/${id}`).remove();
};
