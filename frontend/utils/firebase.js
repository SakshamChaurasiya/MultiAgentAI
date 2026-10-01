// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "multiagentai-fb9e6.firebaseapp.com",
  projectId: "multiagentai-fb9e6",
  storageBucket: "multiagentai-fb9e6.firebasestorage.app",
  messagingSenderId: "27954911695",
  appId: "1:27954911695:web:f7fbf3265c952a756a1aba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()