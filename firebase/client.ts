import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCnQpW-qxFSdMXlta8xF-If20sNiZ_7u1k",
  authDomain: "prepwiseai-37854.firebaseapp.com",
  projectId: "prepwiseai-37854",
  storageBucket: "prepwiseai-37854.firebasestorage.app",
  messagingSenderId: "220987943695",
  appId: "1:220987943695:web:dfb234492c73ef87e16c7a",
  measurementId: "G-Q0MJFL3GJC"
};

const app = !getApps.length ?initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)
