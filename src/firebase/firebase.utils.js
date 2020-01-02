import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDY3ttA7yXb6O4XZ5HyQJ7xJ6VN4RyeTc8",
    authDomain: "crwn-db-mostafa.firebaseapp.com",
    databaseURL: "https://crwn-db-mostafa.firebaseio.com",
    projectId: "crwn-db-mostafa",
    storageBucket: "crwn-db-mostafa.appspot.com",
    messagingSenderId: "575835656505",
    appId: "1:575835656505:web:c2951dfe39ed25c98f98e8",
    measurementId: "G-18BYNJ4ZS3"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
