import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebaseApp";
import { store } from "..";

const loginUser = async (email) => {
  const user = await checkUser(email);
  if (user) {
    localStorage.setItem("user", user.id);
    store.dispatch({
      type: "user/SET_STATE",
      payload: { id: user.id, email: user.id },
    });
    return user;
  } else {
    const success = await createUser(email);
    if (success) {
      loginUser(email);
    }
  }
};
const logoutUser = async () => {
  localStorage.removeItem("user");
  store.dispatch({
    type: "user/RESET",
  });
};

const createUser = async (email) => {
  try {
    await setDoc(doc(firestore, "users", email), {
      username: email,
    });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

const checkUser = async (email) => {
  const docRef = doc(firestore, "users", email);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const user = { id: docSnap.id, ...docSnap.data() };
    return user;
  } else {
    return false;
  }
};

export { loginUser, logoutUser, createUser, checkUser };
