// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyCxnnHmBvTR0nLgmknMCNCb8QyEeLyJ0DE",
  authDomain: "ecommerceshop-1ee8b.firebaseapp.com",
  projectId: "ecommerceshop-1ee8b",
  storageBucket: "ecommerceshop-1ee8b.appspot.com",
  messagingSenderId: "1012136715188",
  appId: "1:1012136715188:web:6a9d92844a393cb17308e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
