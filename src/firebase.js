import {initializeApp} from 'firebase/app'
import {
    getAuth
} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

var firebaseConfig = {
    apiKey: 'AIzaSyBIT4vdWtPQIObnC7_u8c5Kkt1O-mBo2Qw', 
    authDomain: 'expense-tracker-manager.firebaseapp.com',
    projectId: 'expense-tracker-manager',
    storageBucket: 'expense-tracker-manager.appspot.com',
    messagingSenderId: '567004142900',
    appId: '1:567004142900:web:528f665b66499ca90cd961'
}

const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(firebaseApp);
export const auth = getAuth()

export const db = getFirestore()




