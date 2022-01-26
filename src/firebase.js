// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// This import loads the firebase namespace.

// import * as firebase from 'firebase';
// const firebase = require('firebase/app');
// // import firebase from 'firebase/app'




  var firebase = require('firebase');
  var firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyDQFrF6OcIHjuSYc3dk9Y3aFKirp6A61Aw',
    authDomain: 'whatsapp-clone-de30f.firebaseapp.com',
    projectId: 'whatsapp-clone-de30f'});
  require("firebase/firestore");
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  export{ auth,provider};
  export default db;
