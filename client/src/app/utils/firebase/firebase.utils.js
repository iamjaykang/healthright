// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exist
  // create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  // if user data exists

  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result;
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      console.log("Cannot create user, email already in use");
    } else {
      console.log("Error creating user:", error);
    }
  }
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    switch (error.code) {
      case "auth/wrong-password":
        console.log("Incorrect password or email");
        break;
      case "auth/user-not-found":
        console.log("No user associated with this email");
        break;
      default:
        console.log(error);
        break;
    }
  }
};

export const signInAuthUserForAdmin = async (email, password) => {
  if (!email || !password) return;

  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = result.user;
    const isAdmin = await user.getIdTokenResult();

    if (isAdmin.claims.admin) {
      return user;
    } else {
      console.log("You are not authorized to sign in as an admin.");
      signOutUser();
      return null;
    }
  } catch (error) {
    switch (error.code) {
      case "auth/wrong-password":
        console.log("Incorrect password or email");
        break;
      case "auth/user-not-found":
        console.log("No user associated with this email");
        break;
      default:
        console.log(error);
        break;
    }
  }
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};

export const setIdTokenInCookie = (idToken, expirationDate) => {
  document.cookie = `idToken=${idToken}; expires=${expirationDate}; path=/; secure; HttpOnly`;
};

auth.onAuthStateChanged((user) => {
  if (user) {
    user.getIdToken().then((idToken) => {
      // set the expiration date for the cookie
      const expirationDate = new Date(new Date().getTime() + 60 * 60 * 1000);
      setIdTokenInCookie(idToken, expirationDate);
    });
  }
});
