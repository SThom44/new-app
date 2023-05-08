// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from 'firebase/auth';

import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBjafH8a3aBDWSgb9akrT87OSkPYMZhL-8",

  authDomain: "new-app-9db95.firebaseapp.com",

  projectId: "new-app-9db95",

  storageBucket: "new-app-9db95.appspot.com",

  messagingSenderId: "169286547840",

  appId: "1:169286547840:web:065a5a046c41b597ca6965",

  measurementId: "G-5EDD3WTECD"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
