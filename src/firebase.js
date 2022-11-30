import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAdqnho7aPXiLN28yBsRG-8WWRPWGGqg34",
  authDomain: "myauth-59db2.firebaseapp.com",
  projectId: "myauth-59db2",
  storageBucket: "myauth-59db2.appspot.com",
  messagingSenderId: "67475683153",
  appId: "1:67475683153:web:3d8fbb00d72a9e94aa0570"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)