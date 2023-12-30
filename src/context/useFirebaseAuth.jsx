import { useState, useEffect } from "react";
import { app, auth } from "../lib/firebase";
import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState) => {
    if (!authState) {
      setLoading(false);
      return;
    }

    setLoading(true);

    var formattedUser = formatAuthUser(authState);

    setAuthUser(formattedUser);

    setLoading(false);
  };

  const clear = () => {
    setAuthUser(null);
    setLoading(false);
  };

  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)
      .then((authuser) => authuser)
      .catch((error) => {
        throw error;
      });

  const signUp = async (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const logOut = async () => {
    signOut(auth).then(clear);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return unsubscribe;
  });

  return {
    authUser,
    loading,
    signIn,
    signUp,
    logOut,
  };
}
