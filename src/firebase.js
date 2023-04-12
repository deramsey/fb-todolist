// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_KEY,
  authDomain: "to-do-list-c8604.firebaseapp.com",
  projectId: "to-do-list-c8604",
  storageBucket: "to-do-list-c8604.appspot.com",
  messagingSenderId: "116509033471",
  appId: "1:116509033471:web:bd426fdc0555faab155dca",
  measurementId: "G-Q3NM9617ER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);