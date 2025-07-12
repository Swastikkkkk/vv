// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfGxeGR5E-H5ednofZVQK85fTKMewrvuU",
  authDomain: "rewear-ebe94.firebaseapp.com",
  projectId: "rewear-ebe94",
  storageBucket: "rewear-ebe94.firebasestorage.app",
  messagingSenderId: "1070415208966",
  appId: "1:1070415208966:web:af46830fdb613f2e221987",
  measurementId: "G-LRX3WGT1DE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);