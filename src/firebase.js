import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA5I9IKSz0F7hKZksL3cz9cJpeUA43_p44",
  authDomain: "listed-8f37b.firebaseapp.com",
  projectId: "listed-8f37b",
  storageBucket: "listed-8f37b.appspot.com",
  messagingSenderId: "164267122356",
  appId: "1:164267122356:web:6f6700202ee6607b5bc1e1",
  measurementId: "G-F5NNG918JT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth}
