// Import the functions you need from the SDKs you need
import { FirebaseError, initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { AdditionalInformation, UserData } from "../../models/user.model";

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

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation: AdditionalInformation = {}
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exist
  // create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { email } = userAuth;
    const createdAt = new Date();
    const firstName = additionalInformation.firstName
    const lastName = additionalInformation.lastName

    try {
      await setDoc(userDocRef, {
        email,
        createdAt,
        firstName,
        lastName,
      });
    } catch (error) {
      console.log("Error creating the user", error);
    }
  }

  // if user data exists

  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
  additionalInformation: AdditionalInformation = {} as AdditionalInformation
) => {
  if (!email || !password) return;

  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await createUserDocumentFromAuth(result.user, { ...additionalInformation });
    return result;
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      if (error.code === "auth/email-already-in-use") {
        console.log("Cannot create user, email already in use");
      } else {
        console.log("Error creating user:", error);
      }
    }
  }
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "auth/wrong-password":
          throw new Error("Incorrect password or email");
        case "auth/user-not-found":
          throw new Error("No user associated with this email");
        default:
          throw new Error(error.message);
      }
    }
    throw error;
  }
};

export const signInAuthUserForAdmin = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = result.user;
    const isAdmin = await user.getIdTokenResult();

    if (isAdmin.claims.admin) {
      return user;
    } else {
      throw new Error("You are not authorized to sign in as an admin.");
    }
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "auth/wrong-password":
          throw new Error("Incorrect password or email");
        case "auth/user-not-found":
          throw new Error("No user associated with this email");
        default:
          throw new Error(error.message);
      }
    }
    throw error;
  }
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => {
  onAuthStateChanged(auth, callback);
};

export const getCurrentUser = (): Promise<User | null> => {
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

export const setIdTokenInCookie = (idToken: string, expirationDate: Date) => {
  document.cookie = `idToken=${idToken}; expires=${expirationDate}; path=/; secure;`;
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
