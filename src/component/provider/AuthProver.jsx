import React from "react";
import { createContext } from "react";
export const AuthContex = createContext(null);
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import app from "../../firebase/firebase.con";
import { useEffect } from "react";

const auth = getAuth(app);
const AuthProver = ({ children }) => {
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

  const authinfo = { user, loading, createUser, signin, logOut };
  return <AuthContex.Provider value={authinfo}>{children}</AuthContex.Provider>;
};

export default AuthProver;
