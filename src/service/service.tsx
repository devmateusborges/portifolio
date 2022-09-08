import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';


   const firebaseConfig = {
    apiKey: "AIzaSyAGzvZIVH2Q75LmxBGGn6AOL83jYpg5msg",
    authDomain: "bcompany-5f3b8.firebaseapp.com",
    projectId: "bcompany-5f3b8",
    storageBucket: "bcompany-5f3b8.appspot.com",
    messagingSenderId: "315559851543",
    appId: "1:315559851543:web:d0c29b77a80680ea2d0e52",
    measurementId: "G-JG3S0JX3C6"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
