import { combineReducers } from "redux";
import gameplay from "./gameplay/reducers";
import settings from "./settings/reducers";

const reducers = () =>
	combineReducers({
		settings,
		gameplay,
	});

export default reducers;
