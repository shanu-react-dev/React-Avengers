import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDkk8y_1Twz03o_lPkZHTkSzn6W4FbxidA",
  authDomain: "spotify-a79ee.firebaseapp.com",
  projectId: "spotify-a79ee",
  storageBucket: "spotify-a79ee.firebasestorage.app",
  messagingSenderId: "77607715090",
  appId: "1:77607715090:web:a3cb42f71ab3b0b59f73cb",
  databaseURL: "https://spotify-a79ee-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
