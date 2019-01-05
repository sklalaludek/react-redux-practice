import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBkjehLDTWul51DMizprYSfIaGWCzpqlL8",
  authDomain: "catch-of-the-day-skla.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-skla.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;