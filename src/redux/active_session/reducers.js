import { DEFAULT_SESSION_DATA } from "../../defaults/session";
import actions from "./actions";

const initialState = DEFAULT_SESSION_DATA;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
