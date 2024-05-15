<script lang="ts" setup>
// import Navbar from '../components/site/Navbar.vue'
import NavbarV2 from "~/components/site/NavbarV2.vue";
</script>
<template>
    <NuxtLoadingIndicator />
    <div>
        <NavbarV2 />
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<style>
body {
  min-height: 100vh;
}
</style>
