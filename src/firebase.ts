import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBm5kysvp0XdZeu01vO4ZofSl_VrS0qTc0",
  authDomain: "discord-clone-c3341.firebaseapp.com",
  projectId: "discord-clone-c3341",
  storageBucket: "discord-clone-c3341.appspot.com",
  messagingSenderId: "712807299124",
  appId: "1:712807299124:web:a5e65d7b61939344633261"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
