// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwpcw5Rp2ewHQdl4spJZllzw9APs7e75M",
  authDomain: "react-contact-c44bf.firebaseapp.com",
  projectId: "react-contact-c44bf",
  storageBucket: "react-contact-c44bf.appspot.com",
  messagingSenderId: "287574504698",
  appId: "1:287574504698:web:fe9f011fa4b2dae4ff8543"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)