import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';





const firebaseConfig = {
    apiKey: "AIzaSyBJ1NHY3CtJCGVhxAH3a7IzAMUkC5ZwNEM",
    authDomain: "fir-auth-test-3c5f2.firebaseapp.com",
    projectId: "fir-auth-test-3c5f2",
    storageBucket: "fir-auth-test-3c5f2.appspot.com",
    messagingSenderId: "209054928514",
    appId: "1:209054928514:web:ea060fc004fe6c3dbaae9b",
    measurementId: "G-ET5JTS897L"
};

const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
