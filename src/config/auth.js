import { auth } from "./FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
export const doSigninWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}
export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  // result.user
  return result
}
export const doSignOut = () => {
  return auth.signOut();
}
export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
}
export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
}
export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
}