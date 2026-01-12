//! This line imports the initializeApp function from the Firebase library.
//? Why we use it:
//* Firebase is split into modules.
//* initializeApp is needed to start (initialize) Firebase in your project so you can use Firebase services like Authentication, Firestore, Realtime Database, Storage, etc.
import { initializeApp } from "firebase/app";

//! Creating the Firebase configuration object
//? What is this
//* A JavaScript object that stores your Firebase project’s settings.
//? Why we use it
//* Firebase needs this configuration to know which Firebase project your app should connect to.
const firebaseConfig = {
  apiKey: "AIzaSyBJ6uhUs3RMsrV_ubKxN5GFD_IF0Nws0aM", //* A public key that identifies your Firebase project. It allows your app to communicate with Firebase services.
  authDomain: "app-f5ecc.firebaseapp.com", //* The domain Firebase uses for authentication. Required when you use Firebase Authentication (login with email, Google, etc.).
  projectId: "app-f5ecc", //* The unique ID of your Firebase project. Firebase services like Firestore and Hosting use this to identify your project.
  storageBucket: "app-f5ecc.firebasestorage.app", //* The location where files (images, videos, PDFs, etc.) are stored. Needed when using Firebase Storage to upload or download files.
  messagingSenderId: "1073995642382", //* An ID used by Firebase Cloud Messaging (FCM). Required if your app uses push notifications.
  appId: "1:1073995642382:web:166fd4d76db23d1ea86e5f", //* A unique identifier for your specific app inside the Firebase project. Helps Firebase track and manage your app correctly.
  measurementId: "G-JNBXY7WV78", //* Used by Google Analytics. Enables analytics tracking (page views, user behavior, etc.). Optional unless you’re using Analytics.
  databaseURL: "https://app-f5ecc-default-rtdb.firebaseio.com/", //* The URL of your Firebase Realtime Database. Needed if you want to read/write live data using Firebase Realtime Database.
};

export const app = initializeApp(firebaseConfig);
