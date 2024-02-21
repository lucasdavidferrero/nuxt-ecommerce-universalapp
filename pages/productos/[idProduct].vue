<script lang="ts" setup>
import { useRoute } from 'vue-router'
const route = useRoute()

const IdProduct = route.params.idProduct

</script>
<template>
    <div>{{ route }}</div>
</template>