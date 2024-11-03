// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF2a60AhSpFoYuals-MD1yslvN46BbI0M",
  authDomain: "netfilxgpt-sunil.firebaseapp.com",
  projectId: "netfilxgpt-sunil",
  storageBucket: "netfilxgpt-sunil.appspot.com",
  messagingSenderId: "97732822838",
  appId: "1:97732822838:web:7ceac76621a15bc129d597",
  measurementId: "G-1TG8S6T4P2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();