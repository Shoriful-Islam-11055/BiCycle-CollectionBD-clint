// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSBcS_dfI6ReP0JSHIb1Rk7BG0cRgGYl0",
  authDomain: "crazy-bycycle-collection-bd.firebaseapp.com",
  projectId: "crazy-bycycle-collection-bd",
  storageBucket: "crazy-bycycle-collection-bd.appspot.com",
  messagingSenderId: "662589232111",
  appId: "1:662589232111:web:a1df6f366210f2dff81c1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;