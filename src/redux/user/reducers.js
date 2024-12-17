import actions from "./actions";

const initialState = {
  id: 0,
  email: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
