import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOhR6n3lRbyQJMIsfQJB3dNR5A_yF2DDc",
  authDomain: "denco-logistics.firebaseapp.com",
  projectId: "denco-logistics",
  storageBucket: "denco-logistics.appspot.com",
  messagingSenderId: "1032244003505",
  appId: "1:1032244003505:web:15641f335cb58115819890",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export default defineNuxtPlugin(() => ({
  provide: { app, db, auth },
}));
