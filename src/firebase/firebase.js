import {initializeApp} from 'firebase/app'
import {
    getFirestore,
    // connectFirestoreEmulator

} from 'firebase/firestore' 
import {
    getAuth,
    // connectAuthEmulator
} from 'firebase/auth' 

import {
    getStorage,
    connectStorageEmulator
} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyByejNxRxmTq1av4IAp_zY4xWdwwdk8xIo",
    authDomain: "plug-ce91b.firebaseapp.com",
    projectId: "plug-ce91b",
    storageBucket: "plug-ce91b.appspot.com",
    messagingSenderId: "388613185384",
    appId: "1:388613185384:web:e923759933a339571300dd"
  };

//   inititalize firebase app
initializeApp(firebaseConfig)

// create auth instance
const auth= getAuth()
// set up auth emulator
// connectAuthEmulator(auth,'http://localhost:9099')

// create auth instance
const firestore= getFirestore()
// set up auth emulator
// connectFirestoreEmulator(firestore,'localhost',8081)

// create storage instance
const storage= getStorage()
// set up auth emulator
// connectStorageEmulator(storage,'localhost',9199)

export {
    firestore,
    auth,
    storage
}
