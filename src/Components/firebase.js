import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBGV8XONe9qz_1kjPqumgzRgUnTs-tPIDU",
  authDomain: "fir-deakin.firebaseapp.com",
  databaseURL: "https://fir-deakin-default-rtdb.firebaseio.com",
  projectId: "fir-deakin",
  storageBucket: "fir-deakin.appspot.com",
  messagingSenderId: "469746477793",
  appId: "1:469746477793:web:650ac8a86748778b2965a0"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const firestore = app.firestore();

export { app, firestore, firebase };

export const auth = getAuth(app);