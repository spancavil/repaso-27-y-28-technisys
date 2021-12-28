// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuHUmfDFJSw0OQz7GdypRE63GLzq85Lk8",
  authDomain: "technisys-20d65.firebaseapp.com",
  projectId: "technisys-20d65",
  storageBucket: "technisys-20d65.appspot.com",
  messagingSenderId: "233419133827",
  appId: "1:233419133827:web:5df1bfc28aff77c2099cb6"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);