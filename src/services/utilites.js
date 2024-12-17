const opponentData = (currentPlayer, session) => {
  const opponent = Object.keys(session.parties).find(
    (party) => party !== currentPlayer
  );
  console.log(opponent);
  return opponent;
};

export { opponentData };
