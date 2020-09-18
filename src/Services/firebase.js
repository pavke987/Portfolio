import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCjPyiQy4W_bgEu3cTTikrdYd8gJ5yKLGg",
  authDomain: "ideascolection.firebaseapp.com",
  databaseURL: "https://ideascolection.firebaseio.com",
  projectId: "ideascolection",
  storageBucket: "ideascolection.appspot.com",
  messagingSenderId: "1067472536389",
};

firebase.initializeApp(config);

export const db = firebase.firestore();