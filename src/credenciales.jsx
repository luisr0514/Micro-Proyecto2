// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAknDcCvMEMzoBJw6yKtjL85yanMI9i-38",
  authDomain: "micro-proyecto2-a8eff.firebaseapp.com",
  projectId: "micro-proyecto2-a8eff",
  storageBucket: "micro-proyecto2-a8eff.appspot.com",
  messagingSenderId: "926493973583",
  appId: "1:926493973583:web:5236d207b39caaf4c9de3a"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase; 