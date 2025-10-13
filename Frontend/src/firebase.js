// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAax3H-1U8ZC0eUjr_1z9Og-57Wyz5hwBU",
  authDomain: "electric-ferry-booking-system.firebaseapp.com",
  projectId: "electric-ferry-booking-system",
  storageBucket: "electric-ferry-booking-system.firebasestorage.app",
  messagingSenderId: "492770752797",
  appId: "1:492770752797:web:82781defc15eb13f0f89f4",
  measurementId: "G-2RJXSS8XSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
