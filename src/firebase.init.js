// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7xJuspbS-G4ntrWIFhjCQlSwDw9QFhjc",
  authDomain: "ed-tech-fa145.firebaseapp.com",
  projectId: "ed-tech-fa145",
  storageBucket: "ed-tech-fa145.appspot.com",
  messagingSenderId: "217252975690",
  appId: "1:217252975690:web:641cf060a66181f2f382b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;