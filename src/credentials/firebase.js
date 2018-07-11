import firebase from "firebase"

const config = {
  apiKey: "AIzaSyBG1APzzoJzexmLR32kkPUjm5xe12KrfAc",
  authDomain: "brownbag-4.firebaseapp.com",
  databaseURL: "https://brownbag-4.firebaseio.com",
  projectId: "brownbag-4",
  storageBucket: "brownbag-4.appspot.com",
  messagingSenderId: "634923033750"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
