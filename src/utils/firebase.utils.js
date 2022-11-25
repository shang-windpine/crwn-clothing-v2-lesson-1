// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA0vRAS0GgFUjkrPvKG8yFrOAcqfGKFosU',
  authDomain: 'crown-clothing-db-b0324.firebaseapp.com',
  projectId: 'crown-clothing-db-b0324',
  storageBucket: 'crown-clothing-db-b0324.appspot.com',
  messagingSenderId: '229975676849',
  appId: '1:229975676849:web:0ea76754dbb84d5fa70f90',
  measurementId: 'G-HV50HGCSRY'
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential;
};
export const signOutAuthUser = async () => {
  await signOut(auth);
};

export const db = getFirestore();

export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('Done');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (err) {
      console.log('error creating user document', err.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) { return; }
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential;
};

export const onAuthStateChangedListener = async (callback) => {
  onAuthStateChanged(auth, callback);
};
