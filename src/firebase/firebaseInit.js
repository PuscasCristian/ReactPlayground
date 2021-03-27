import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA0Ed1bOCBnLsv-Bm0Z0r_tmDfK6s0xFNw",
    authDomain: "react-playground-b1888.firebaseapp.com",
    projectId: "react-playground-b1888",
    storageBucket: "react-playground-b1888.appspot.com",
    messagingSenderId: "651622997959",
    appId: "1:651622997959:web:b18c979d7296882814c3e2"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export {
    auth,
    firestore,
    firebaseApp
};
