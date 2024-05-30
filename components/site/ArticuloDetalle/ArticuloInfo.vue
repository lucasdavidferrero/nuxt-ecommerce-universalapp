<script setup lang="ts">
import { SfButton } from '@storefront-ui/vue';
import IconWhatsappoutline from '~/assets/icons/whatsappoutline.svg'
</script>

<template>
  <div class="text-center lg:text-left rounded-md p-4 border border-neutral-200">
    <h2 class="text-4xl leading-10 font-headings mb-2">Smart Tv BGH 32" HD Android Voice Control B3223K5A.</h2>
    <p class="text-2xl">
      <span class="line-through text-gray-600">$323.398</span>
      <span class="pl-2 text-primary-800 font-bold">24% OFF</span>
    </p>
    <p class="font-bold text-4xl text-red-900">$243.999</p>

    <SfButton class="w-full mt-4"
              tag="a"
              href="https://wa.me/543493435048?text=Me%20interesa%20este%20producto"
              target="_blank">
      <template #prefix>
        <IconWhatsappoutline class="text-2xl !mb-0" />
      </template>
      CONSULTAR
    </SfButton>
  </div>
</template>

<style scoped>

</style>
