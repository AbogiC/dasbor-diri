// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA556vW3NHTOkwuIL23HtBhoy_yvxpBOsA",
  authDomain: "dasbor-diri-1.firebaseapp.com",
  projectId: "dasbor-diri-1",
  storageBucket: "dasbor-diri-1.firebasestorage.app",
  messagingSenderId: "970865318774",
  appId: "1:970865318774:web:ae0e473524d2a90f2f3857",
  measurementId: "G-Y47B9LGEYG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export { app };
