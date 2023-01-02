// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1d8tm9CBRquFGw3SiXQhcXVPKvPzll6Q",
  authDomain: "healthright-db.firebaseapp.com",
  projectId: "healthright-db",
  storageBucket: "healthright-db.appspot.com",
  messagingSenderId: "377622046481",
  appId: "1:377622046481:web:f4b9a345b16b9e6afc8eb0",
  measurementId: "G-NC9TVXG02Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);