import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebaseApp";
import { opponentData } from "./utilites";
import { DEFAULT_PARTY_DATA } from "../defaults/session";
import { calculateAvailability } from "../gameplay";

export const makeMove = async (player, sessionId, move) => {
  const sessionRef = doc(firestore, "sessions", sessionId);
  const docSnap = await getDoc(sessionRef);
  if (docSnap.exists()) {
    const session = { id: docSnap.id, ...docSnap.data() };
    const opponent = opponentData(player, session);
    session.turn = opponent;
    const available = calculateAvailability(move, session.moves);
    session.moves = [...session.moves, move];
    session.parties[player].moves.push(move);
    session.available = available;
    await updateDoc(sessionRef, session);
  }
};

export const resetGame = async (session, currentPlayer) => {
  const sessionRef = doc(firestore, "sessions", session.sessionId);
  const opponent = opponentData(currentPlayer, session);

  const data = {
    moves: [],
    available: [],
    parties: {
      [currentPlayer]: DEFAULT_PARTY_DATA,
      [opponent]: DEFAULT_PARTY_DATA,
    },
  };
  await setDoc(sessionRef, data, { merge: true });
};
