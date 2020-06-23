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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
