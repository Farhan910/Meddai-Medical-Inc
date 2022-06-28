// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgyG1CegQCC-gzNHcsKa2WokJz0BLInE8",
  authDomain: "assignment-e39ad.firebaseapp.com",
  projectId: "assignment-e39ad",
  storageBucket: "assignment-e39ad.appspot.com",
  messagingSenderId: "240586644644",
  appId: "1:240586644644:web:cec09221174f3013b59a31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;