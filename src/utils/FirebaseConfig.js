import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const FirebaseConfig = {
  apiKey: "AIzaSyDTAT7bquItcc5xp8sfvehNbWP4qEphCqg",
  authDomain: "marvel-4b2e9.firebaseapp.com",
  projectId: "marvel-4b2e9",
  storageBucket: "marvel-4b2e9.appspot.com",
  messagingSenderId: "971906258460",
  appId: "1:971906258460:web:5012325d35cec42d0f71d9"
};

const app = initializeApp(FirebaseConfig);
export const db = getFirestore(app);