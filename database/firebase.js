import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBgKEgRVYQlWngemw_m5APO8QJIaqCYsjs",
    authDomain: "concesionario-dd006.firebaseapp.com",
    projectId: "concesionario-dd006",
    storageBucket: "concesionario-dd006.appspot.com",
    messagingSenderId: "766972395923",
    appId: "1:766972395923:web:8a0314237e7b99f6a86866",
    measurementId: "G-HKG7290ELW"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()

  export default {firebase, db}