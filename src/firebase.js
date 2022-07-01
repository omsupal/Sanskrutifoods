import firebase from 'firebase/compat'
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAvrG7xvGnv3l12bzkXKRGrZZrIT0p9vpQ",
    authDomain: "sanskrutitestting.firebaseapp.com",
    projectId: "sanskrutitestting",
    storageBucket: "sanskrutitestting.appspot.com",
    messagingSenderId: "1055773885330",
    appId: "1:1055773885330:web:eb4097eedd9bdb4e2cf74b",
    measurementId: "G-XE40RTJ1W8"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserDocument = async (user, additionalData, ad , AC) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email } = user;
    const { displayName } = additionalData;
    const { address } = ad;
    const { NUM } = AC;
    try {
      await userRef.set({
        displayName,
        email,
        address,
        NUM,
        createdAt: new Date(),
      });
    } catch (error) {
      console.log('Error in creating user', error);
    }
  }
};