import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDnPhsZwrfm-bKfbuVJ_KAjb3P3NAPcXY8",
    authDomain: "crwn-db-45c33.firebaseapp.com",
    databaseURL: "https://crwn-db-45c33.firebaseio.com",
    projectId: "crwn-db-45c33",
    storageBucket: "crwn-db-45c33.appspot.com",
    messagingSenderId: "598049506233",
    appId: "1:598049506233:web:4f69b89eb7b11570112c68"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promot: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;