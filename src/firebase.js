// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATCIu4ERWKZCUWZ8E0mdpBYpDRmk58Qec",
    authDomain: "chat-app-f44fc.firebaseapp.com",
    projectId: "chat-app-f44fc",
    storageBucket: "chat-app-f44fc.appspot.com",
    messagingSenderId: "846252876065",
    appId: "1:846252876065:web:22990e3e66bd4d4edd5e60"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();