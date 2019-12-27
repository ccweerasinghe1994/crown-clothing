import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
 apiKey: "AIzaSyDwmmGgmYA7poeHrh4mhZBipbTn4rqithA",
    authDomain: "crown-db-9b665.firebaseapp.com",
    databaseURL: "https://crown-db-9b665.firebaseio.com",
    projectId: "crown-db-9b665",
    storageBucket: "crown-db-9b665.appspot.com",
    messagingSenderId: "284543109877",
    appId: "1:284543109877:web:72a4f9f645c7b3700a13bc",
    measurementId: "G-33145686G5"
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
