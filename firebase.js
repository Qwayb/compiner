import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAH1jcq2S8XioIOevxAUFgPpZsm_2uCEWY",
    authDomain: "compiner-bfffe.firebaseapp.com",
    projectId: "compiner-bfffe",
    storageBucket: "compiner-bfffe.firebasestorage.app",
    messagingSenderId: "475209827643",
    appId: "1:475209827643:web:79f347a0e9ffeb1280e31e",
    measurementId: "G-N422LWFQ44"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

