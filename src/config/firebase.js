
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAiOrYoD3Qt5KT9_M3mdqbJjdBWyGcR2rE",
  authDomain: "tiktok-jornada-398fd.firebaseapp.com",
  projectId: "tiktok-jornada-398fd",
  storageBucket: "tiktok-jornada-398fd.appspot.com",
  messagingSenderId: "112767867480",
  appId: "1:112767867480:web:81a9e24c235faffda4882d"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
