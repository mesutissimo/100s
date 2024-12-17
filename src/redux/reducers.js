import { combineReducers } from "redux";
import gameplay from "./gameplay/reducers";
import settings from "./settings/reducers";
import user from "./user/reducers";
import active_session from "./active_session/reducers";

const reducers = () =>
  combineReducers({
    settings,
    gameplay,
    user,
    active_session,
  });

export default reducers;
