import { createUserWithEmailAndPassword, signInWithEmailAndPassword   } from "firebase/auth";
export function useFirebaseAuth () {
    const {$auth} = useNuxtApp()

    async function register (email: string, password: string) {
        try {
            const userCredential = await createUserWithEmailAndPassword($auth, email, password)
            const user = userCredential.user
            console.log(user)
        } catch (e) {
            console.log(e)
        }
    }

    async function login (email: string, password: string) {
        try {
            const userCredentials = await signInWithEmailAndPassword($auth, email, password)
            const user = userCredentials.user
            console.log(user)

        } catch (e) {
            console.error(e)
        }
    }

    return {
        register,
        login
    }
}