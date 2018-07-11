import firebase from "../credentials/firebase"

const ref = {
  create: () => firebase.database().ref(),
  update: () => firebase.database().ref(),
  read: () => firebase.database().ref(),
  delete: () => firebase.database().ref()
}

const auth = firebase.auth

const provider = new firebase.auth.FacebookAuthProvider()

export {
  ref,
  auth,
  provider
}
