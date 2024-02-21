<script lang="ts" setup>
import { SfLink, SfButton, SfIconShoppingCart } from '@storefront-ui/vue'
const props = defineProps({
    productTitle: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true 
    },
    imageURL: {
        type: String,
        required: true 
    }
})
</script>
<template>
    <div class="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]">
    <div class="relative">
      <SfLink href="#productDetail" class="block">
        <img
          :src="imageURL"
          :alt="productTitle"
          class="block object-cover h-auto rounded-md aspect-square"
          width="300"
          height="300"
        />
      </SfLink>
    </div>
    <div class="p-4 border-t border-neutral-200">
      <SfLink href="#" variant="secondary" class="no-underline"> {{ productTitle }} </SfLink>
      <!--<div class="flex items-center pt-1">
        <SfRating size="xs" :value="5" :max="5" />

        <SfLink href="#" variant="secondary" class="pl-1 no-underline">
          <SfCounter size="xs">123</SfCounter>
        </SfLink>
      </div>-->
      <!--<p class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700">
        Lightweight • Non slip • Flexible outsole • Easy to wear on and off
      </p>-->
      <span class="block pb-2 font-bold typography-text-lg">${{ price }}</span>
      <SfButton size="sm">
        <template #prefix>
          <SfIconShoppingCart size="sm" />
        </template>
        Agregar al carro
      </SfButton>
    </div>
  </div>
</template>