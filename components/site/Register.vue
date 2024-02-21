<script setup lang="ts">
import { reactive } from 'vue'
import { SfInput, SfIconEmail, SfButton } from '@storefront-ui/vue';

const { register } = useFirebaseAuth()

const registerForm = reactive({
    email: '',
    password: ''
})

async function handleSubmit () {
    try {
        await register(registerForm.email, registerForm.password)
    } catch (err) {
        console.error(err)
    }
}
</script>
<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <label>
                <span class="text-sm font-medium">Correo</span>
                <SfInput required v-model="registerForm.email">
                    <template #prefix><SfIconEmail /></template>
                </SfInput>
            </label>

            <label class="block my-4">
                <span class="typography-label-sm font-medium">Password</span>
                <SfInput
                v-model="registerForm.password"
                type="password"
                required />
            </label>

            <SfButton class="w-full" type="submit"> Registrar </SfButton>
        </form>
    </div>
</template>