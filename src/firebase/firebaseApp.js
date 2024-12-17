// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxiDUcOV8aGJMD3lGbDuNlINTq4O-WSIc",
  authDomain: "mm-100s.firebaseapp.com",
  projectId: "mm-100s",
  storageBucket: "mm-100s.firebasestorage.app",
  messagingSenderId: "431244647369",
  appId: "1:431244647369:web:5bd165dffad7ae4cf76618",
  measurementId: "G-2GE6WT89Q5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const firestore = getFirestore(app);

export { app, analytics, database, firestore };
