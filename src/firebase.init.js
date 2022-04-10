// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAREU3CH-1-78Rt1nPYPu9rZDb1HoYsz_g",
  authDomain: "ema-john-simple-23778.firebaseapp.com",
  projectId: "ema-john-simple-23778",
  storageBucket: "ema-john-simple-23778.appspot.com",
  messagingSenderId: "623736681749",
  appId: "1:623736681749:web:27968ad2bb01e8535a651c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;