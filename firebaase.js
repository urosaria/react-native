import firebase from 'firebase'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDx-i5JYBAEKrOtQ0rBIJHYWMojcSHDRmA",
    authDomain: "rn-instagram-colne.firebaseapp.com",
    projectId: "rn-instagram-colne",
    storageBucket: "rn-instagram-colne.appspot.com",
    messagingSenderId: "233877490008",
    appId: "1:233877490008:web:10be897c0b7457d6187d2d",
    measurementId: "G-1C8RWXGLY0"
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { firebase, db }
