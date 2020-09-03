// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";


var firebaseConfig = {
    apiKey: "AIzaSyBH1hcdD38uuy1JNGcs5Y9xzQ6SQz2qLgA",
    authDomain: "chat-app-eeafa.firebaseapp.com",
    databaseURL: "https://chat-app-eeafa.firebaseio.com",
    projectId: "chat-app-eeafa",
    storageBucket: "chat-app-eeafa.appspot.com",
    messagingSenderId: "194948235010",
    appId: "1:194948235010:web:a9fab8b312a804435b8c1b",
    measurementId: "G-Y15PFG1QC8"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }