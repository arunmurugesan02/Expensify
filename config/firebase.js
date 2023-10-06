// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import  {collection, getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBCzcF99YGX5KQDPSZd7c28cINUtBl4anI",
  authDomain: "expensify-2089b.firebaseapp.com",
  projectId: "expensify-2089b",
  storageBucket: "expensify-2089b.appspot.com",
  messagingSenderId: "1052832666738",
  appId: "1:1052832666738:web:0b2e77bf8ba93c2d4e5eeb",
  measurementId: "G-C7B3462FP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const tripsRef = collection(db,'trips');
export const expensesRef = collection(db,'expenses');

export default app;