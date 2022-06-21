import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh7vuCmwvuLURlpxqNjTgWx7ZfffrqMBE",
  authDomain: "coderhouse-uruenareact.firebaseapp.com",
  projectId: "coderhouse-uruenareact",
  storageBucket: "coderhouse-uruenareact.appspot.com",
  messagingSenderId: "857457630381",
  appId: "1:857457630381:web:f7f73c92b929b852de3a24",
  measurementId: "G-CWNK6R33LT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);