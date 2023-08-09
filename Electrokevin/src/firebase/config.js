import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBvPlsSDpQ30xwAAKyb20vP2tyoCMfw8yo",
    authDomain: "electrokevin-c6c29.firebaseapp.com",
    projectId: "electrokevin-c6c29",
    storageBucket: "electrokevin-c6c29.appspot.com",
    messagingSenderId: "494498395275",
    appId: "1:494498395275:web:5e448247a1e3529133108e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)