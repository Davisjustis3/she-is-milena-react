import { auth } from "./config/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// Sign up
export const signUp = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

// Sign in
export const signIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// Sign in with Google
export const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
// Logout
export const logOut = () => signOut(auth);