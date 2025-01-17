import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8itH55EqdIcnCX0ta_lwNksWbviQ4BC0",
  authDomain: "handh-16f05.firebaseapp.com",
  projectId: "handh-16f05",
  storageBucket: "handh-16f05.firebasestorage.app",
  messagingSenderId: "99514097693",
  appId: "1:99514097693:web:28006fcfe7ad59ef9326f4",
  measurementId: "G-3MENE0KY01",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
