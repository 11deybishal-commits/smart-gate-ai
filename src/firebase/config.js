import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJ-mKOyaJuJvMsRUs4npvJR8b76yBUYJ8",
  authDomain: "smart-ai-gate-system.firebaseapp.com",
  projectId: "smart-ai-gate-system",
  storageBucket: "smart-ai-gate-system.firebasestorage.app",
  messagingSenderId: "357219006014",
  appId: "1:357219006014:web:0096c3403655c9bf2d436f",
  measurementId: "G-EP1G8XWNPP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
