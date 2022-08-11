// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBUOPeJ_2hbUcL3Q2_uvWUVtxd2she4qQ",
  authDomain: "netflix-clone-f5d8a.firebaseapp.com",
  projectId: "netflix-clone-f5d8a",
  storageBucket: "netflix-clone-f5d8a.appspot.com",
  messagingSenderId: "334355900254",
  appId: "1:334355900254:web:17afd8ff8153cb8c8bd1cf"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }