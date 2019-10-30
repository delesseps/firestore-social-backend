import * as firebaseAdmin from 'firebase-admin'

export const adminDB = firebaseAdmin.initializeApp()
export const firestoreDB = adminDB.firestore()
