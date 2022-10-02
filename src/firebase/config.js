import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCqXfAdacZsLJxn-OQGcmTa58cw1YXCF7Y",
    authDomain: "smart-agenda-7114d.firebaseapp.com",
    projectId: "smart-agenda-7114d",
    storageBucket: "smart-agenda-7114d.appspot.com",
    messagingSenderId: "592005761757",
    appId: "1:592005761757:web:5a2e8d20bfa6149f0fa934"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// initialize services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, projectStorage, timestamp}