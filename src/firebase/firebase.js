import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD_hXFwwyVK3TudvhwUE3HSIeVusBt0z7A",
    authDomain: "expensify-7e672.firebaseapp.com",
    databaseURL: "https://expensify-7e672.firebaseio.com",
    projectId: "expensify-7e672",
    storageBucket: "",
    messagingSenderId: "392065853404",
    appId: "1:392065853404:web:c9342bf810c49102"
  };

  firebase.initializeApp(firebaseConfig);


  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  export {firebase,googleAuthProvider,database as default}