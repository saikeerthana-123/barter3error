import firebase from 'firebase';
require('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDHCZQBpQi6-quyE3i5_yWBKmRZ4ezBdbE",
    authDomain: "barter-system-e3841.firebaseapp.com",
    projectId: "barter-system-e3841",
    storageBucket: "barter-system-e3841.appspot.com",
    messagingSenderId: "598574327839",
    appId: "1:598574327839:web:f28f3e9803ed7022138d2a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()