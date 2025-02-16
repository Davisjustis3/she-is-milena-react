import { useContext, useState, useEffecrt } from "react";
import { auth } from "../config/FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const AuthContent = React.createContext();

export function useAuth() {
  return useContext(AuthContent)
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffecrt(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeuser)
    return unsubscribe;
  }, [])
  async function initializeuser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true)
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false)
    }
    setLoading(false)
  }
  const value = {
    currentUser,
    userLoggedIn,
    loading
  }

  return (
    <AuthContent.Provider value={value}>
      {!loading && children}
    </AuthContent.Provider>
  )
}