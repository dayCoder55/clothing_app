import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBY7mXIjVUarVcVoSEg51BrLEl8m2Ygsgg",
    authDomain: "clothingapp-db-1da54.firebaseapp.com",
    projectId: "clothingapp-db-1da54",
    storageBucket: "clothingapp-db-1da54.appspot.com",
    messagingSenderId: "348383582906",
    appId: "1:348383582906:web:52a276989a74369df80083",
    measurementId: "G-ZCKRF9CKMD"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore =firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
