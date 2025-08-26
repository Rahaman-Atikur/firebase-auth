// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABvkdvj775qAt00ujJhvF5SCduY3tFkys",
  authDomain: "fir-auth-1320a.firebaseapp.com",
  projectId: "fir-auth-1320a",
  storageBucket: "fir-auth-1320a.firebasestorage.app",
  messagingSenderId: "568365635812",
  appId: "1:568365635812:web:69c4af3e0f82451cd274f1"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);