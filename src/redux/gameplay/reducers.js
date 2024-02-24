import actions from "./actions";

const initialState = {
	score: 0,
	moves: [],
	available: [],
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
