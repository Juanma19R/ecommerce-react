// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApmqyfVH2YiV9IbZJXaIj-CpguHhKBclY",
    authDomain: "ecommerce-mision-ti.firebaseapp.com",
    projectId: "ecommerce-mision-ti",
    storageBucket: "ecommerce-mision-ti.appspot.com",
    messagingSenderId: "343112584941",
    appId: "1:343112584941:web:79c88b30d9db4496d906e4"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;