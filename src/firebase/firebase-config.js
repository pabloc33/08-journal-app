import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKEl-oQ0OcbkS9-3UDbhWqkjZryZvsYLU",
  authDomain: "react-app-cursos-98331.firebaseapp.com",
  databaseURL: "https://react-app-cursos-98331.firebaseio.com",
  projectId: "react-app-cursos-98331",
  storageBucket: "react-app-cursos-98331.appspot.com",
  messagingSenderId: "841371962740",
  appId: "1:841371962740:web:3ff2ee5582c11498a13021",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
