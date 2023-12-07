import React from "react";
import { createContext } from "react";
export const AuthContex = createContext(null);
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import app from "../../firebase/firebase.con";
import { useEffect } from "react";

const auth = getAuth(app);
const AuthProver = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // logged user
  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };

  // google sign in
  const googleSingIn = () => {
    return signInWithPopup(auth, provider);
  };
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // github signIn

  // observe user state change

  useEffect(() => {
    const unsubsCriber = onAuthStateChanged(auth, (curentUser) => {
      setUser(curentUser);
      setLoading(false);
    });
    // stoping observe while unmounting
    return () => {
      return unsubsCriber();
    };
  }, []);

  const authinfo = {
    user,
    loading,
    createUser,
    signin,
    logOut,
    googleSingIn,
    githubSignIn,
  };
  return <AuthContex.Provider value={authinfo}>{children}</AuthContex.Provider>;
};

export default AuthProver;
