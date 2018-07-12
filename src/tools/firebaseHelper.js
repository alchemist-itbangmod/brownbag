import firebase from "../credentials/firebase"

const ref = "brownbag4"

const db = firebase.database()

const getAll = () => db.ref(`${ref}`)

const getOne = (attr, whereCause) => db.ref(`${ref}/${attr}/${whereCause}`)

const insert = (uid, value, cb) => db.ref(`${ref}/${uid}`).set({ ...value }, cb)

const auth = firebase.auth

const provider = new firebase.auth.FacebookAuthProvider()

export {
  db,
  getAll,
  getOne,
  insert,
  auth,
  provider
}
