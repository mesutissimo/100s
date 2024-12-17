const opponentData = (currentPlayer, session) => {
  const opponent = Object.keys(session.parties).find(
    (party) => party !== currentPlayer
  );
  return opponent;
};

export { opponentData };
