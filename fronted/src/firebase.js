// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,// this api key come from .env file 
  authDomain: "real-estate-50868.firebaseapp.com",
  projectId: "real-estate-50868",
  storageBucket: "real-estate-50868.appspot.com",
  messagingSenderId: "376015025542",
  appId: "1:376015025542:web:1c173ae63ac0a2977ea807"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);