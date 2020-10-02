import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDEYM4N0GHgXUqqaI0NYeZLbDP7maI0m5U",
  authDomain: "crwn-db-11305.firebaseapp.com",
  databaseURL: "https://crwn-db-11305.firebaseio.com",
  projectId: "crwn-db-11305",
  storageBucket: "crwn-db-11305.appspot.com",
  messagingSenderId: "147499686576",
  appId: "1:147499686576:web:d44eb0b1447129d04a7975",
  measurementId: "G-7EWBKCCFDM",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
