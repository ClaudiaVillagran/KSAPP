import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getStorage } from "firebase/storage"; // Importar Storage
// Optionally import the services that you want to use
// import {...} from 'firebase/database';
// import {...} from 'firebase/functions';

// Initialize Firebase

const firebaseConfig = {
  apiKey: "AIzaSyC4w3d1_QnqY-TBxYxQkN__XT_Bqzw8_nc",
  authDomain: "ksapp-ad81e.firebaseapp.com",
  projectId: "ksapp-ad81e",
  storageBucket: "ksapp-ad81e.firebasestorage.app",
  messagingSenderId: "649382354226",
  appId: "1:649382354226:web:2f21a4d089463069eccb2b"
};

const app = initializeApp(firebaseConfig);


// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
const auth = getAuth(app);
const db = getFirestore(app);


export {auth,db }