import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const {$auth} = useNuxtApp()

interface State {
    displayName: string | null
    email: string | null
    uid: string | null
    phoneNumber: string | null
    authObserverWasCalled: boolean
  }

export const useAuthStore = defineStore('auth', {
    state: (): State => ({
        displayName: null,
        email: null,
        uid: null,
        phoneNumber: null,
        authObserverWasCalled: false
    }),
    actions: {
        async signInWithEmail (email: string, password: string) {
            const userCredential = await signInWithEmailAndPassword($auth, email, password)
        },
        async signOut () {
            await signOut($auth)
        },
        async registerWithEmail (email: string, password: string) {
            /* 
                Creates a new user account associated with the specified email address and password.
                On successful creation of the user account, this user will also be signed in to your application.
            */
            const userCredential = await createUserWithEmailAndPassword($auth, email, password)
        },
        registerAuthObserver() {
            if (!this.authObserverWasCalled) {
                onAuthStateChanged($auth, (user) => {
                    if (user) {
                        this.displayName = user.displayName
                        this.email = user.email
                        this.uid = user.uid
                        this.phoneNumber = user.phoneNumber
                    } else {
                        this.displayName = null
                        this.email = null
                        this.uid = null
                        this.phoneNumber = null
                    }
                })
                this.authObserverWasCalled = true
            }
        }
    }
})