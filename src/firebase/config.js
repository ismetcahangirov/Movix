import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBK5dhaDp3-lBzCQp3IzgEN1gOgsAlWUlg",
    authDomain: "movix-e4baf.firebaseapp.com",
    projectId: "movix-e4baf",
    storageBucket: "movix-e4baf.firebasestorage.app",
    messagingSenderId: "789370314540",
    appId: "1:789370314540:web:801b25e48635da967d5689",
    measurementId: "G-381FYBS166"
}


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
