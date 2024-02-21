<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth'

const {$auth} = useNuxtApp()
const authStore = useAuthStore()
authStore.registerAuthObserver($auth)

</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
