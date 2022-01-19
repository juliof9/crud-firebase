import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAINGwwFhHrfF7YcbFKgU1N2S8AfkkOozI",
    authDomain: "crud-react-4a8dc.firebaseapp.com",
    projectId: "crud-react-4a8dc",
    storageBucket: "crud-react-4a8dc.appspot.com",
    messagingSenderId: "767785767226",
    appId: "1:767785767226:web:4f9e9e82e5a53d1b5d0003"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};