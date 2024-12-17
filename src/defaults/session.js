const DEFAULT_SESSION_DATA = {
  score: 0,
  moves: [],
  available: [],
  openMoves: [],
  sessionId: null,
  waitingOpponent: true,
  created_by: "tester@abc.com",
  started: null,
  parties: {},
  lastTurn: null,
};

const DEFAULT_PARTY_DATA = {
  email: "",
  score: 0,
  moves: [],
  available: [],
};

export { DEFAULT_SESSION_DATA, DEFAULT_PARTY_DATA };
