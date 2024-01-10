// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHAMYP0IzL7rWbwZfXLzcQKU6lJh2xgVE",
  authDomain: "fabi-gaye.firebaseapp.com",
  projectId: "fabi-gaye",
  storageBucket: "fabi-gaye.appspot.com",
  messagingSenderId: "849930866502",
  appId: "1:849930866502:web:bc779da878ca43e3d8df47",
  measurementId: "G-HDP74MP72G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
