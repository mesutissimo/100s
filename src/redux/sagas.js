import { all } from "redux-saga/effects";
import gameplay from "./gameplay/sagas";
import settings from "./settings/sagas";
function* rootSaga() {
	yield all([gameplay(), settings()]);
}

export default rootSaga;
