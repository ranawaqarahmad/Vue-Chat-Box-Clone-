import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCV-PujnHD_JC-cfCpmk0kkahPn6Exr3YU",
  authDomain: "vue-chat-box-5d913.firebaseapp.com",
  databaseURL: "https://vue-chat-box-5d913.firebaseio.com",
  projectId: "vue-chat-box-5d913",
  storageBucket: "vue-chat-box-5d913.appspot.com",
  messagingSenderId: "990569433390",
  appId: "1:990569433390:web:a5c8be4a19df46043752bf",
  measurementId: "G-LE9N30WNCM"
  };
  // Initialize Firebase
 const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })
export default firebaseApp.firestore()
