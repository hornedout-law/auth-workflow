import {initializeApp, credential} from "firebase-admin"
import {getAuth} from "firebase-admin/auth"

export let admin  = initializeApp({
    credential : credential.cert("./exp-911-firebase-adminsdk-6oxi3-d78a41bd05.json")
})

export let auth = getAuth(admin)
