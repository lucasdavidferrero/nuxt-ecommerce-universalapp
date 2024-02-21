<script lang="ts" setup>
import ProductCard from '@/components/UI/ProductCard.vue'
</script>
<template>
    <Container>
        <h1>Productos recientes</h1>
        <div>
            <ProductCard 
                productTitle="Zapatillas Converse 4CF4" 
                price="100,87" 
                imageURL="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png" />
        </div>
    </Container>
</template>