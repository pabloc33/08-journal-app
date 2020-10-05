import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//console.log(process.env);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// const firebaseConfigTesting = {
//   apiKey: "AIzaSyDY3uqLGjH0ImeoaMet6IXQEt8-dSsXyeY",
//   authDomain: "redux-demo-4d4c3.firebaseapp.com",
//   databaseURL: "https://redux-demo-4d4c3.firebaseio.com",
//   projectId: "redux-demo-4d4c3",
//   storageBucket: "redux-demo-4d4c3.appspot.com",
//   messagingSenderId: "659915621340",
//   appId: "1:659915621340:web:fa8bacec1f25f90ef20519",
//   measurementId: "G-VXHDKWB3V0",
// };

// if (process.env.NODE_ENV === "test") {
//   // testing
//   firebase.initializeApp(firebaseConfigTesting);
// } else {
//   // dev/prod
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// }

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
