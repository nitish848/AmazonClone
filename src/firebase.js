// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA0XUXvP_9ZpBTWK8S8Jyk9FrA5g-HyU1E",
  authDomain: "challenge-db586.firebaseapp.com",
  projectId: "challenge-db586",
  storageBucket: "challenge-db586.appspot.com",
  messagingSenderId: "103024902803",
  appId: "1:103024902803:web:a94c1567e7ce3af0fd4366",
  measurementId: "G-GNB2RGP63D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };