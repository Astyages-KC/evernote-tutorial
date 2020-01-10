import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const firebase = require('firebase');
require('firebase/firestore');

  firebase.initializeApp({
    apiKey: "AIzaSyCXnqw7SjT_uKJX4wqdEQgBAk2nAjKWXxQ",
    authDomain: "evernote-clone-95b04.firebaseapp.com",
    databaseURL: "https://evernote-clone-95b04.firebaseio.com",
    projectId: "evernote-clone-95b04",
    storageBucket: "evernote-clone-95b04.appspot.com",
    messagingSenderId: "695997544051",
    appId: "1:695997544051:web:4c8d7e75481d11e2049c06",
    measurementId: "G-6YQTJCTX7Q"
  });
  firebase.analytics();

ReactDOM.render(<App />, document.getElementById('evernote-container'));

