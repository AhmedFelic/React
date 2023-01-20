// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBrPGHp8qcr0uMokVSUhZQU11MeJSPc8WY",
  authDomain: "auth-react-6039e.firebaseapp.com",
  projectId: "auth-react-6039e",
  storageBucket: "auth-react-6039e.appspot.com",
  messagingSenderId: "851343815224",
  appId: "1:851343815224:web:b6e812caf0fb877e41accd",
  measurementId: "G-ET3BBRK1MG"
});

// Initialize Firebase
const app = firebaseConfig;
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
 export const db = firebaseConfig.firestore()