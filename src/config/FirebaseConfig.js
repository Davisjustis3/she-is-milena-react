// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzV8iUUxGmoMkm2LrZfEiD0YnT9bLErhw",
  authDomain: "fir-sheismilena.firebaseapp.com",
  projectId: "fir-sheismilena",
  storageBucket: "fir-sheismilena.firebasestorage.app",
  messagingSenderId: "179127133417",
  appId: "1:179127133417:web:603fdb3311b68896cc3c78",
  measurementId: "G-EWBN6C53WJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

