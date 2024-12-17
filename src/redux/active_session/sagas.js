import { all, call, put, takeEvery } from "redux-saga/effects";
import actions from "../active_session/actions";
import { getGameSession } from "../../services/game_sessions";

export function* GET_SESSION({ payload }) {
  const { id } = payload;
  try {
    yield call(getGameSession, id);
  } catch (e) {
    console.log(e);
  }
}
export function* _UPDATE_SESSION({ payload }) {
  const session = payload;

  try {
    yield put({ type: "active_session/SET_STATE", payload: session });
  } catch (e) {
    console.lg(e);
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_SESSION, GET_SESSION),
    takeEvery(actions._UPDATE_SESSION, _UPDATE_SESSION),
  ]);
}
