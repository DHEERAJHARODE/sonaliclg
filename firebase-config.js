// Firebase SDK modules ko CDN se import karna (Standard Version 9+)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// .env file se keys read karna (Aap jis platform par deploy karenge uske standard format ke mutabik)
const firebaseConfig = {
    apiKey: window._env_?.FIREBASE_API_KEY || "AIzaSyCq_4LwgKBfL8cgcbITn1KcosHG2zD6fqk",
    authDomain: window._env_?.FIREBASE_AUTH_DOMAIN || "sonaliclg-56705.firebaseapp.com",
    projectId: window._env_?.FIREBASE_PROJECT_ID || "sonaliclg-56705",
    storageBucket: window._env_?.FIREBASE_STORAGE_BUCKET || "sonaliclg-56705.firebasestorage.app",
    messagingSenderId: window._env_?.FIREBASE_MESSAGING_SENDER_ID || "365542773917",
    appId: window._env_?.FIREBASE_APP_ID || "1:365542773917:web:311fa23119214cacc7f074",
    measurementId: window._env_?.FIREBASE_MEASUREMENT_ID || "G-T0K1T0VYHE"
};

// Firebase initialize karna
const app = initializeApp(firebaseConfig);

// Firestore database instance export karna taaki ise baki pages me use kiya ja sake
const db = getFirestore(app);

export { db };