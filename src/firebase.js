import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBrGVzK3Mv8gzYPskeXb7OBDdPlEJi18P8",
  authDomain: "psico-space.firebaseapp.com",
  databaseURL: "https://psico-space.firebaseio.com",
  projectId: "psico-space",
  storageBucket: "",
  messagingSenderId: "234023052527",
  appId: "1:234023052527:web:3f4ed30788c22909"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;