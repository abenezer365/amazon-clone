// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD_sN7Yj7IP1ZisSXAolvhNXUR0JCKN0M",
  authDomain: "clone-4cb5a.firebaseapp.com",
  projectId: "clone-4cb5a",
  storageBucket: "clone-4cb5a.firebasestorage.app",
  messagingSenderId: "509882170746",
  appId: "1:509882170746:web:5928a3ebc233a6d2ab2ac3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)