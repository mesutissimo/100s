import { all, put } from "redux-saga/effects";

export function* GET_CURRENT_USER() {
  const user = localStorage.getItem("user");

  if (user) {
    yield put({ type: "user/SET_STATE", payload: { id: user, email: user } });
  }
}
export default function* rootSaga() {
  yield all([
    // takeEvery(actions.GET_SCORE, GET_SOCRE),
    GET_CURRENT_USER(),
  ]);
}
