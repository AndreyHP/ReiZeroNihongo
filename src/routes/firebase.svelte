<script context="module">
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    //import { getAnalytics } from "firebase/analytics";
    import {getFirestore} from "firebase/firestore";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyCqImecU48F5umhJbVm_Rw4ycYyhe_Z2Lw",
    authDomain: "reizerotonihongo.firebaseapp.com",
    projectId: "reizerotonihongo",
    storageBucket: "reizerotonihongo.firebasestorage.app",
    messagingSenderId: "1069024630838",
    appId: "1:1069024630838:web:5997f6e63093588a96e097",
    measurementId: "G-EJFMKV8MM1"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    //const analytics = getAnalytics(app);
    const db = getFirestore(app);
    export {db};
  </script>