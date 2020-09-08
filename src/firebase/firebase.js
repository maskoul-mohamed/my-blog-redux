import firebase from 'firebase/app';
import 'firebase/database'; 
import 'firebase/auth';

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBSE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBSE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBSE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBSE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBSE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBSE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBSE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBSE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);


const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };