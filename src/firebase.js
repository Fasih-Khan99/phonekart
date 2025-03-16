// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';   //firebase authentication connection
import { getFirestore } from "firebase/firestore";   //firestore database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvJNcoprWEWgOPtiTDbXYItj41Uz2JwIw",
  authDomain: "phonekart-aab5f.firebaseapp.com",
  projectId: "phonekart-aab5f",
  storageBucket: "phonekart-aab5f.firebasestorage.app",
  messagingSenderId: "689882148093",
  appId: "1:689882148093:web:576663bdec803966c72294"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = getFirestore(app);