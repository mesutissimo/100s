import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "../../firebase/firebaseApp";

const loginUser = async (email) => {
  const user = await checkUser(email);
  if (user) {
    return user;
  } else {
    const success = await createUser(email);
    if (success) {
      loginUser(email);
    }
  }
};
const createUser = async (email) => {
  console.log("Creating user: ", email);
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
    const user = docSnap.data();
    return user;
  } else {
    console.log("No such document!");
    return false;
  }
};

export { loginUser, createUser, checkUser };
