import { useState, useEffect } from 'react'
import { app } from '../lib/firebase';
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

import { redirect } from 'react-router-dom';

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app)


  const authStateChanged = async (authState) => {
    if (!authState) {
      setLoading(false)
      return;
    }

    setLoading(true)

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
      .then(authUser => {
        redirect('/');
      })
      .catch(error => {
        throw(error)
      });

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const logOut = () =>{
    signOut(auth).then(clear)}

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return unsubscribe
  });

  

  return {
    authUser,
    loading,
    signIn,
    signUp,
    logOut,
  };
}