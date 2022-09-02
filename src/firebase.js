// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGhZZzYZzewBP0lU3wNMoX1HyBzsLBuwQ",
  authDomain: "linkedin-clone-5937f.firebaseapp.com",
  projectId: "linkedin-clone-5937f",
  storageBucket: "linkedin-clone-5937f.appspot.com",
  messagingSenderId: "100787340812",
  appId: "1:100787340812:web:e4c99b7c69ac92bcc61029",
  measurementId: "G-GC0XXTNEXW",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };