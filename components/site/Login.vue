<script setup lang="ts">
import { reactive } from 'vue'
import { SfInput, SfIconEmail, SfButton } from '@storefront-ui/vue';

const { loginWithEmail } = useFirebaseAuth()

const loginForm = reactive({
    email: '',
    password: ''
})

async function handleSubmit () {
    try {
        await loginWithEmail(loginForm.email, loginForm.password)
        await navigateTo('/dashboard')
    } catch(e) {
        console.error(e)
    }
}
</script>
<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <label>
                <span class="text-sm font-medium">Correo</span>
                <SfInput required v-model="loginForm.email">
                    <template #prefix><SfIconEmail /></template>
                </SfInput>
            </label>

            <label class="block my-4">
                <span class="typography-label-sm font-medium">Password</span>
                <SfInput
                v-model="loginForm.password"
                type="password"
                required />
            </label>

            <SfButton class="w-full" type="submit"> Ingresar </SfButton>
        </form>
    </div>
</template>