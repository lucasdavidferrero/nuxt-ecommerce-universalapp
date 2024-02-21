import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  
  const firebaseConfig = {
    apiKey: config.public.apiKey as string,
    authDomain: config.public.authDomain as string,
    projectId: config.public.projectId as string,
    storageBucket: config.public.storageBucket as string,
    messagingSenderId: config.public.messagingSenderId as string,
    appId: config.public.appId as string
  };
      
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

  return {
    provide: {
        auth
    }
  }
})