// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcOTY6RNcNWU1rHI8zXRLnwPtDi-6deQA",
  authDomain: "atteno-83c42.firebaseapp.com",
  projectId: "atteno-83c42",
  storageBucket: "atteno-83c42.appspot.com",
  messagingSenderId: "869573815289",
  appId: "1:869573815289:web:80f888c3e2a953634b2b28",
  measurementId: "G-VSP997X5T6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);