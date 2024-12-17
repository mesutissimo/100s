import { all } from "redux-saga/effects";
import gameplay from "./gameplay/sagas";
import settings from "./settings/sagas";
import user from "./user/sagas";
import active_session from "./active_session/sagas";
function* rootSaga() {
  yield all([gameplay(), settings(), user(), active_session()]);
}

export default rootSaga;
