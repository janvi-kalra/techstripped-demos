// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuXX4Ok2yBCAfbxG_6gGMD6wzvjcGGPWg",
  authDomain: "techstrippedbackenddemo.firebaseapp.com",
  projectId: "techstrippedbackenddemo",
  storageBucket: "techstrippedbackenddemo.appspot.com",
  messagingSenderId: "243111942941",
  appId: "1:243111942941:web:a12dad61dbc38235b95ff4",
  measurementId: "G-P51WC4YLSH",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
