import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config for your project
const firebaseConfig = {
  apiKey: "AIzaSyCGelEuSnOm0gy0sMNEwpvqGnQO7gWyEaI",  // Use your own API Key here
  authDomain: "cancer-prediction-8bfbe.firebaseapp.com",  // Use your own Auth domain
  projectId: "cancer-prediction-8bfbe",  // Use your own Project ID
  storageBucket: "cancer-prediction-8bfbe.appspot.com",  // Use your own Storage Bucket
  messagingSenderId: "939540065705",  // Use your own Messaging Sender ID
  appId: "1:939540065705:web:xyz123abc456",  // Use your own App ID
  measurementId: "G-XYZ123456"  // Optional if you're using Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword };
