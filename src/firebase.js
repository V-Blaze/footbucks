// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBfLWzJ2BLHSsakKTEu6M6YG9LEY51QZRM',
  authDomain: 'footbucks-48c73.firebaseapp.com',
  projectId: 'footbucks-48c73',
  storageBucket: 'footbucks-48c73.appspot.com',
  messagingSenderId: '610859426505',
  appId: '1:610859426505:web:dc51d0b6e9dd8091292318',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
