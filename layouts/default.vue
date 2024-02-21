<script lang="ts" setup>
import Navbar from '../components/site/Navbar.vue'
</script>
<template>
    <NuxtLoadingIndicator />
    <div>
        <Navbar></Navbar>
        <div>
            <slot></slot>
        </div>
    </div>
</template>