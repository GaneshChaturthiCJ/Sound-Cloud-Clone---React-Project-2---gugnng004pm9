// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDmQJyb7bB-0GuYL8gxZQs6WPNh52kwFVA",
  authDomain: "soundcloud-clone-45c9d.firebaseapp.com",
  projectId: "soundcloud-clone-45c9d",
  storageBucket: "soundcloud-clone-45c9d.appspot.com",
  messagingSenderId: "127927975608",
  appId: "1:127927975608:web:d1e08a8c52fb31deab3e4d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// const db = getFirestore(app);
export { auth, provider };
