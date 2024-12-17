import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { firestore } from "../../firebase/firebaseApp";

export const getActiveGameSessions = async () => {
  const q = query(
    collection(firestore, "sessions"),
    where("status", "==", "waiting")
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
