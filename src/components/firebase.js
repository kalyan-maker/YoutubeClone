// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRKHEOvEfACqPvuoX0SeXneaa2T2fU8wQ",
  authDomain: "react-app-6e74b.firebaseapp.com",
  databaseURL: "https://react-app-6e74b-default-rtdb.firebaseio.com",
  projectId: "react-app-6e74b",
  storageBucket: "react-app-6e74b.appspot.com",
  messagingSenderId: "772527292442",
  appId: "1:772527292442:web:af99dabd0d9e7a54d951a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
