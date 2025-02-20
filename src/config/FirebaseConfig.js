// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDzV8iUUxGmoMkm2LrZfEiD0YnT9bLErhw",
  authDomain: "fir-sheismilena.firebaseapp.com",
  projectId: "fir-sheismilena",
  storageBucket: "fir-sheismilena.firebasestorage.app",
  messagingSenderId: "179127133417",
  appId: "1:179127133417:web:603fdb3311b68896cc3c78",
  measurementId: "G-EWBN6C53WJ"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app);

export {auth, db}