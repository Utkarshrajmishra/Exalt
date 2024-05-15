// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD4MhgrhRJrugZNfl8TKlzYsghRKvHl3W4",
  authDomain: "exalt-723eb.firebaseapp.com",
  projectId: "exalt-723eb",
  storageBucket: "exalt-723eb.appspot.com",
  messagingSenderId: "338354254152",
  appId: "1:338354254152:web:f6c93aa9f215cbf4c2837d",
  measurementId: "G-HSN4PR01R3",
};

// Initialize Firebase
const auth=getAuth();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default {auth,analytics}