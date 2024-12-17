import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebaseApp";
import { opponentData } from "./utilites";
import { store } from "..";
import { DEFAULT_PARTY_DATA } from "../defaults/session";
import { update } from "firebase/database";

export const makeMove = async (player, sessionId, move) => {
  console.log("===MOve");
  const sessionRef = doc(firestore, "sessions", sessionId);
  const docSnap = await getDoc(sessionRef);

  if (docSnap.exists()) {
    const session = { id: docSnap.id, ...docSnap.data() };
    const opponent = opponentData(player, session);
    session.turn = opponent;
    console.log(session.moves);
    await updateDoc(sessionRef, {
      moves: [...session.moves, move],
      turn: opponent,
    });
  }
};

export const setAvailableMoves = async (player, sessionId, available) => {
  const sessionRef = doc(firestore, "sessions", sessionId);
  await updateDoc(sessionRef, { available });
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
  console.log(data);
  await setDoc(sessionRef, data, { merge: true });
};
