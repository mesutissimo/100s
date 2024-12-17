import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { firestore } from "../firebase/firebaseApp";
import { store } from "..";
import { DEFAULT_PARTY_DATA, DEFAULT_SESSION_DATA } from "../defaults/session";

export const getActiveGameSessions = async () => {
  const q = query(
    collection(firestore, "sessions"),
    where("waitingOpponent", "==", true)
  );

  const querySnapshot = await getDocs(q);
  const sessions = [];
  querySnapshot.forEach((doc) => {
    sessions.push({ id: doc.id, ...doc.data() });
  });
  return sessions;
};

export const updateSession = async (id, data) => {
  const sessionRef = doc(firestore, "sessions", id);
  await updateDoc(sessionRef, data);
};
export const joinToSession = async (id, { player }) => {
  const sessionRef = doc(firestore, "sessions", id);
  const data = {
    waitingOpponent: false,
    parties: { [player]: DEFAULT_PARTY_DATA },
    turn: Math.round(Math.random()) === 1 ? player : null,
  };
  await setDoc(sessionRef, data, { merge: true });
};

export const createSession = async () => {
  const sessionData = DEFAULT_SESSION_DATA;
  sessionData.created_by = localStorage.getItem("user");
  sessionData.started_at = Date.now();
  sessionData.parties = { [`${sessionData.created_by}`]: DEFAULT_PARTY_DATA };

  try {
    const session = await addDoc(
      collection(firestore, "sessions"),
      sessionData
    );

    return session.id;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getGameSession = (id) => {
  const unsub = onSnapshot(
    doc(firestore, "sessions", id),
    { includeMetadataChanges: true },
    (doc) => {
      store.dispatch({
        type: "active_session/_UPDATE_SESSION",
        payload: { ...doc.data(), sessionId: doc.id },
      });
    }
  );
};
