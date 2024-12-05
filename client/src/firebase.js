// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv5I_nX8LV5Pj1b3EokOHhD_wBbGt0Uic",
  authDomain: "social-network-86661.firebaseapp.com",
  projectId: "social-network-86661",
  storageBucket: "social-network-86661.appspot.com",
  messagingSenderId: "839319543130",
  appId: "1:839319543130:web:6545c4b5db66fd89a56763",
  measurementId: "G-KJFXW029M9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;