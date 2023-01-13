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

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  // Create a reference to the collection using the provided key
  const collectionRef = collection(db, collectionKey);

  // Create a write batch to allow for multiple document writes in a single request
  const batch = writeBatch(db);

  // Iterate over the objects to be added
  objectsToAdd.forEach((object) => {
    // Create a reference to a document within the collection using value of the specified field of the object
    const docRef = doc(collectionRef, object[field].toLowerCase());

    // Set the object as the data for the document
    batch.set(docRef, object);
  });

  // Commit the batch to save the changes
  await batch.commit();
};

export const getBrandsAndDocuments = async () => {
  // Create a reference to the "brands" collection
  const collectionRef = collection(db, "brands");

  // Create a query for the collection
  const q = query(collectionRef);

  // Retrieve the query snapshot
  const querySnapshot = await getDocs(q);

  // Create a map of brands to items using the reduce method on the array of documents in the snapshot
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exist
  // create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating the user", error);
    }
  }

  // if user data exists

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user;
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

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
