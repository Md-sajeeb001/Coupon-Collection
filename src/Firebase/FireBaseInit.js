// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs2msv0OvOW2YaWLPzF5-VfIPZ2Nag7DU",
  authDomain: "coupon-collection-49c96.firebaseapp.com",
  projectId: "coupon-collection-49c96",
  storageBucket: "coupon-collection-49c96.firebasestorage.app",
  messagingSenderId: "683535816397",
  appId: "1:683535816397:web:bc183242f0576a997dbb84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
