import {
    getAuth,
    onAuthStateChanged as _onAuthStateChanged,
    signOut as _signOut,
    signInWithEmailAndPassword as _signInWithEmailAndPassword,
    createUserWithEmailAndPassword as _createUserWithEmailAndPassword,
  } from "firebase/auth";
  import { firebaseApp } from "./firebase";
  
  export const auth = getAuth(firebaseApp);
  
  export const signInWithEmailAndPassword = (email, password) => {
    return _signInWithEmailAndPassword(auth, email, password);
  };
  
  export const createUserWithEmailAndPassword = (email, password) => {
    return _createUserWithEmailAndPassword(auth, email, password);
  };
  
  export const signOut = () => {
    return _signOut(auth);
  };
  
  export const onAuthStateChanged = (cb) => {
    return _onAuthStateChanged(auth, cb);
  };