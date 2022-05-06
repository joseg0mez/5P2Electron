import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBwT51S_pK1KKdzKVJXzMCc9MzquZrR6mw",
  authDomain: "quitter-f9d92.firebaseapp.com",
  projectId: "quitter-f9d92",
  storageBucket: "quitter-f9d92.appspot.com",
  messagingSenderId: "112527923886",
  appId: "1:112527923886:web:05d8e3164d08d418deeb3f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// access firebase database with db variable
const db = firebase.firestore()

export default db
