// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8Ex_PavgLMaAgf5QJUVJn9T-hel53-9s",
  authDomain: "todoapp-6d403.firebaseapp.com",
  projectId: "todoapp-6d403",
  storageBucket: "todoapp-6d403.appspot.com",
  messagingSenderId: "467933572104",
  appId: "1:467933572104:web:cec903529f925d581fb5bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;