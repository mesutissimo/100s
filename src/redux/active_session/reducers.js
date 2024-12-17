import actions from "./actions";

const initialState = {
  score: 0,
  moves: [],
  available: [],
  host: {
    score: 0,
  },
  opponent: { score: 0 },
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
