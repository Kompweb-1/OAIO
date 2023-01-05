// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "kontor-01.firebaseapp.com",
  projectId: "kontor-01",
  storageBucket: "kontor-01.appspot.com",
  messagingSenderId: "978839694369",
  appId: "1:978839694369:web:692dc807774addbda04760",
  measurementId: "G-6H0HEXD1Z7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// export const analytics = getAnalytics(app);
// export const storage = getStorage(app);
