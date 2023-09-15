import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJ-fOqyksHhaSOw0J4reerzFBGFQFYcng",
    authDomain: "task-manager-app-d413f.firebaseapp.com",
    projectId: "task-manager-app-d413f",
    storageBucket: "task-manager-app-d413f.appspot.com",
    messagingSenderId: "609144611967",
    appId: "1:609144611967:web:78423f2e68138f197d0b4a",
    databaseURL:'https://task-manager-app-d413f-default-rtdb.firebaseio.com'
  };
  
  // Initialize Firebase
export  const app = initializeApp(firebaseConfig);