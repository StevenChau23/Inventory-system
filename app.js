// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2iolu67xguBOEHnJ2cfb3_K-nwQdHACQ",
  authDomain: "steven-b690f.firebaseapp.com",
  projectId: "steven-b690f",
  storageBucket: "steven-b690f.firebasestorage.app",
  messagingSenderId: "1003575294244",
  appId: "1:1003575294244:web:d2ac190431626b4b125bb1",
  measurementId: "G-97R5HBQFTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
