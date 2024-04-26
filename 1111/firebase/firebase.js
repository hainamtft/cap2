

const firebaseConfig = {
    apiKey: "AIzaSyAzlV1OidzxbmY5HwekrbDO3S9_D1bGm7s",
    authDomain: "nammm-a7cc8.firebaseapp.com",
    databaseURL: "https://nammm-a7cc8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "nammm-a7cc8",
    storageBucket: "nammm-a7cc8.appspot.com",
    messagingSenderId: "50365253422",
    appId: "1:50365253422:web:9a947765ec25cb942f5cbf",
    measurementId: "G-WG3HDPEPT2"
};



const auth = firebase.auth();
const db = firebase.firestore();

if (!firebase.apps.length) {
    console.error('Failed to initialize Firebase');
  } else {
    console.log('Firebase initialized successfully');
  }

