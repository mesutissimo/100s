import { all, call, select, takeEvery } from "redux-saga/effects";
import actions from "./actions";
import { resetGame } from "../../services/gameplay";

function* RESET_GAME() {
  const { active_session, user } = yield select();
  yield call(resetGame, active_session, user.id);
}

export default function* rootSaga() {
  yield all([takeEvery(actions.RESET_GAME, RESET_GAME)]);
}
