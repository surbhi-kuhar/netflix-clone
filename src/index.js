import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDYKaPEu85GLRIjQeiBTXrBV1b6nN9iS5s",
  authDomain: "netflix-a69d9.firebaseapp.com",
  projectId: "netflix-a69d9",
  storageBucket: "netflix-a69d9.appspot.com",
  messagingSenderId: "828225022524",
  appId: "1:828225022524:web:154312d4030f3d58933139"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
