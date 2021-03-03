import * as firebase from "firebase";//import firbase

var firebaseConfig = {
    apiKey: "AIzaSyAxW4_oL8D3ocK8GN4e-J-d9UH6m268RKU",
    authDomain: "interview-crud.firebaseapp.com",
    databaseURL: "https://interview-crud-default-rtdb.firebaseio.com",
    projectId: "interview-crud",
    storageBucket: "interview-crud.appspot.com",
    messagingSenderId: "704702396109",
    appId: "1:704702396109:web:546d4f02d8ecee9407db84",
    measurementId: "G-F83Q2V4GJJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
