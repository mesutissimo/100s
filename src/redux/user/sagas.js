import { all, put, takeEvery } from "redux-saga/effects";
import actions from "./actions";

export function* GET_CURRENT_USER() {
  const user = localStorage.getItem("user");

  if (user) {
    yield put({ type: "user/SET_STATE", payload: { id: user, email: user } });
  }
}

export function* LOGOUT() {
  localStorage.removeItem("user");
  yield put({
    type: "user/RESET",
  });
}

export default function* rootSaga() {
  yield all([takeEvery(actions.LOGOUT, LOGOUT), GET_CURRENT_USER()]);
}
