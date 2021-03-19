import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA-P-Q2_DKhiro6dmBAyIUOmi1u2YxYLQo",
  authDomain: "crwn-db-646d5.firebaseapp.com",
  projectId: "crwn-db-646d5",
  storageBucket: "crwn-db-646d5.appspot.com",
  messagingSenderId: "419830513950",
  appId: "1:419830513950:web:81c7b14242080a9d4fc90f",
  measurementId: "G-7GM5PHS2E4",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
