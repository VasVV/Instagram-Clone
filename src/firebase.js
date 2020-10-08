import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAfwQmu2GgQW5XWMN77WVYiZiphi2FMBII",
  authDomain: "instagramclone-27725.firebaseapp.com",
  databaseURL: "https://instagramclone-27725.firebaseio.com",
  projectId: "instagramclone-27725",
  storageBucket: "instagramclone-27725.appspot.com",
  messagingSenderId: "262913140419",
  appId: "1:262913140419:web:f5501958af86a74c4ca476"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
