// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9b9e7.firebaseapp.com",
  projectId: "mern-blog-9b9e7",
  storageBucket: "mern-blog-9b9e7.appspot.com",
  messagingSenderId: "12624810373",
  appId: "1:12624810373:web:4bd9077666ba95540ab4ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);