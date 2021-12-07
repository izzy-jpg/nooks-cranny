import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBVEmWc14swzSxmHzbx9QgmEPo4aN-ri2k",
  authDomain: "nookscranny-95dad.firebaseapp.com",
  projectId: "nookscranny-95dad",
  storageBucket: "nookscranny-95dad.appspot.com",
  messagingSenderId: "747726919109",
  appId: "1:747726919109:web:eb03a95e54daf1dfd0e7ac"
};

firebase.initializeApp(firebaseConfig);

export default firebase;