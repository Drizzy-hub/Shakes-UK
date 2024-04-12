// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsrcRzFvXa6zU6lF8Y5ENt2btp3qZyrBU",
  authDomain: "doctor-s-appointment-f00f0.firebaseapp.com",
  projectId: "doctor-s-appointment-f00f0",
  storageBucket: "doctor-s-appointment-f00f0.appspot.com",
  messagingSenderId: "484839061515",
  appId: "1:484839061515:web:a680b7882100590db8af0e",
  measurementId: "G-9P3SDB8DFZ",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage();
// const analytics = getAnalytics(app);

export { auth, db, storage };
