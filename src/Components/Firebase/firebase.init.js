

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    //    authDomain=assignment-11-29778
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
export default app;


// apiKey: "AIzaSyDr1HqWo9f78_7ZlgIQVh7wgf8Z9uUH4IM",
//     authDomain: "assignment-11-29778.firebaseapp.com",
//     projectId: "assignment-11-29778",
//     storageBucket: "assignment-11-29778.appspot.com",
//     messagingSenderId: "799017555721",
//     appId: "1:799017555721:web:cc98026887806daee765d8"