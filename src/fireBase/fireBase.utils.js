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

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if(!snapShot.exists){
     const { displayName, email} = userAuth;
     const createdAt = new Date();
     try {
       await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData
       })
     }catch(error){
       console.log("error,",error.message)
     }
   }
   return userRef
  }
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore =firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
