// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { doc, setDoc, getFirestore ,collection, query, where, getDocs } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC3M4iFrlQfUpXCSgPdkbfTTnn_H29ovQ0",
  authDomain: "hackathon-smit.firebaseapp.com",
  projectId: "hackathon-smit",
  storageBucket: "hackathon-smit.appspot.com",
  messagingSenderId: "12104677591",
  appId: "1:12104677591:web:0e9968e155adacd5d91892"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export  {
    auth,
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword,
    doc, 
    setDoc,
    db , collection,
     query,
     where,
    getDocs
}