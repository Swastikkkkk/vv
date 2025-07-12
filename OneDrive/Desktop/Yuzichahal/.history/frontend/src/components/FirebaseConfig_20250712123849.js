// src/FirebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Config
const firebaseConfig = {
  apiKey: "AIzaSyCfGxeGR5E-H5ednofZVQK85fTKMewrvuU",
  authDomain: "rewear-ebe94.firebaseapp.com",
  projectId: "rewear-ebe94",
  storageBucket: "rewear-ebe94.firebasestorage.app",
  messagingSenderId: "1070415208966",
  appId: "1:1070415208966:web:af46830fdb613f2e221987",
  measurementId: "G-LRX3WGT1DE"
};

// Initialize
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
