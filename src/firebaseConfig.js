// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbRQJh5itv_0Dnp2kly-_4dB-NEQ6JD6g",
  authDomain: "sample-project-1be15.firebaseapp.com",
  projectId: "sample-project-1be15",
  storageBucket: "sample-project-1be15.firebasestorage.app",
  messagingSenderId: "573691177819",
  appId: "1:573691177819:web:7eaf2c2351d7591e69c87e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider()
export {auth, googleAuthProvider}