// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDet5TBlxI6OqsCXyksKgJY8luzV4h7yuo",
    authDomain: "ambada-fb88b.firebaseapp.com",
    databaseURL: "https://ambada-fb88b.firebaseio.com",
    projectId: "ambada-fb88b",
    storageBucket: "ambada-fb88b.appspot.com",
    messagingSenderId: "657374924580",
    appId: "1:657374924580:web:8cc63c8a6de65352df2db1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;