// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ36TCW8F_erB0wF855XMeshTYwCW7x1U",
  authDomain: "netflix-clone-nextjs-4490c.firebaseapp.com",
  projectId: "netflix-clone-nextjs-4490c",
  storageBucket: "netflix-clone-nextjs-4490c.appspot.com",
  messagingSenderId: "67260693795",
  appId: "1:67260693795:web:8ffa1373caa4c5fff12096",
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
