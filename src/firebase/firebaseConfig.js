import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDHiIxCcsfs-dKpH5-CztQFGroyaKPpbFY",
    authDomain: "magma-ba566.firebaseapp.com",
    projectId: "magma-ba566",
    storageBucket: "magma-ba566.appspot.com",
    messagingSenderId: "94357183721",
    appId: "1:94357183721:web:6d1787623542856c652478",
    measurementId: "G-H042N39CDL"
  };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 //Referencia a la base de datos
 const db = firebase.firestore();
 //para permiter autenticaciómn con google
 const google = new firebase.auth.GoogleAuthProvider();

 //exportamos
 export{
     db,
     google,
     firebase
 }