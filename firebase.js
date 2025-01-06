import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

// comment utiliser les modules de firebase
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialisation de  Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDAA1i7B37UQG5DBinRu_wWeGeh9nEiUB0",
  authDomain: "ootd-b9ba9.firebaseapp.com",
  databaseURL: "https://ootd-b9ba9-default-rtdb.firebaseio.com",
  projectId: "ootd-b9ba9",
  storageBucket: "ootd-b9ba9.firebasestorage.app",
  messagingSenderId: "966998204208",
  appId: "1:966998204208:web:0570c715a2aac8aa0372f5",
  measurementId: "G-VQP45EZNS9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Enrengistrement de nouveaux utilisateurs (=inscriptions)
const auth = getAuth(app);
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

//connexion utilisateur
signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

// Permet d'avoir des infos sur l'utilisateur lorsqu'il se connecte
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
    } else {
      // User is signed out
      // ...
    }
    });




// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

