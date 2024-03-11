// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage'
// import {  } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2b8jBzmAwo0Enq3VOefXOWhVUzvKxzwo",
  authDomain: "microproyecto2-9fb02.firebaseapp.com",
  projectId: "microproyecto2-9fb02",
  storageBucket: "microproyecto2-9fb02.appspot.com",
  messagingSenderId: "399837338319",
  appId: "1:399837338319:web:34585fefb490c20867b5ba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const storage = getStorage(app)