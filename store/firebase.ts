// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo1bJsnUHCcCvSAezSwRQ3cCsQ9k14iUs",
  authDomain: "exp-911.firebaseapp.com",
  projectId: "exp-911",
  storageBucket: "exp-911.appspot.com",
  messagingSenderId: "767394433739",
  appId: "1:767394433739:web:2f9272066bc51fa03e294e",
  measurementId: "G-8V8EKLG511",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig) 
export const analytics =  getAnalytics(app as FirebaseApp)

export const auth = getAuth(app as FirebaseApp)
export const firestore = getFirestore(app as FirebaseApp)
 
