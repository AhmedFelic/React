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

const firebaseConfig = {

  apiKey: "AIzaSyBFfPTOjhYUm-uHggftpx9kNn2RlHMK2LQ",

  authDomain: "forum-15e85.firebaseapp.com",

  projectId: "forum-15e85",

  storageBucket: "forum-15e85.appspot.com",

  messagingSenderId: "191278384823",

  appId: "1:191278384823:web:b5828271a9344d6472ef32"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);