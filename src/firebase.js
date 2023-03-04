import {initializeApp} from "firebase/app"
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyC8z8fgnxGrdXlmwXLLRNR4E4st2T5tuMg",
    authDomain: "votify-333e7.firebaseapp.com",
    projectId: "votify-333e7",
    storageBucket: "votify-333e7.appspot.com",
    messagingSenderId: "242870850310",
    appId: "1:242870850310:web:6c8b43312ff020b96f4487"
  };
const app = initializeApp(config);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth,db}