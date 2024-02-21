import { createUserWithEmailAndPassword, signInWithEmailAndPassword   } from "firebase/auth";
export function useFirebaseAuth () {
    const {$auth} = useNuxtApp()

    async function registerWithEmail (email: string, password: string) {
        const userCredential = await createUserWithEmailAndPassword($auth, email, password)
        const user = userCredential.user
    }

    async function loginWithEmail (email: string, password: string) {
        const userCredentials = await signInWithEmailAndPassword($auth, email, password)
        const user = userCredentials.user
    }

    return {
        registerWithEmail,
        loginWithEmail
    }
}