import firebase from 'firebase'
// const firebaseConfig = {
//     apiKey: "AIzaSyCxB95GFoSAy7VBWhHWe6mnOzl46ITk9fU",
//     authDomain: "books-aa40b.firebaseapp.com",
//     projectId: "books-aa40b",
//     storageBucket: "books-aa40b.appspot.com",
//     messagingSenderId: "456124015208",
//     appId: "1:456124015208:web:8b351afd72487a4c6cd1dd"
//   };

const firebaseConfig = {
    apiKey: "AIzaSyCxB95GFoSAy7VBWhHWe6mnOzl46ITk9fU",
    authDomain: "books-aa40b.firebaseapp.com",
    projectId: "books-aa40b",
    storageBucket: "books-aa40b.appspot.com",
    messagingSenderId: "456124015208",
    appId: "1:456124015208:web:8b351afd72487a4c6cd1dd"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
