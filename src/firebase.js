import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyDbotB0LLEMIc8eRWK4bMiWdFSdhdxAvTs",
    authDomain: "fir-t-8956f.firebaseapp.com",
    databaseURL: "https://fir-t-8956f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-t-8956f",
    storageBucket: "fir-t-8956f.appspot.com",
    messagingSenderId: "898477966838",
    appId: "1:898477966838:web:dc86b62df44994b79ab3d7",
    measurementId: "G-2FTZXC8TFN"
};

firebase.initializeApp(firebaseConfig);


export const database = getDatabase();