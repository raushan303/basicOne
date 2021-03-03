import firebase from "firebase/app";
import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyDSRD5vPdmsyR92SCEH7DRw0lXwxe2iF1g",
  authDomain: "education-45c7d.firebaseapp.com",
  projectId: "education-45c7d",
  storageBucket: "education-45c7d.appspot.com",
  messagingSenderId: "968360761700",
  appId: "1:968360761700:web:c72c6b25bcddfb58b7c271"
};
// Initialize Firebase
if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}else {
   firebase.app(); // if already initialized, use that one
}const storage = firebase.storage();
export { storage, firebase as default };