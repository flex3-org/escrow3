// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC7e1qCQ9UOvPyhUuFkhnsXO4V7Az9HIIM",
    authDomain: "tickets3-7694e.firebaseapp.com",
    projectId: "tickets3-7694e",
    storageBucket: "tickets3-7694e.firebasestorage.app",
    messagingSenderId: "897797671274",
    appId: "1:897797671274:web:00fe16e4cadde924ba3d13"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };