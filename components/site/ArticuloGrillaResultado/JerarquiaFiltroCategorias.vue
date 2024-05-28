<script setup lang="ts">
import { ref } from 'vue';
import {
  SfAccordionItem,
  SfCounter,
  SfIconArrowBack,
  SfIconCheck,
  SfIconChevronLeft,
  SfListItem,
} from '@storefront-ui/vue';

const categoriaSeleccionada = {
      key: '12345678910',
      label: 'Climatización',
      counter: 30,
      link: '#'
}

const categories = ref([
  {
    key: '9812412',
    label: 'Refrigeración',
    counter: 30,
    link: '#',
  },
  {
    key: '678934',
    label: 'Calefacción',
    counter: 28,
    link: '#',
  }
]);

const open = ref(true);
</script>

<template>
  <SfAccordionItem v-model="open" class="w-full lg:max-w-[320px]">
    <template #summary>
      <div class="flex justify-between p-2">
        <p class="font-medium">Categorías</p>
        <SfIconChevronLeft :class="open ? 'rotate-90' : '-rotate-90'" />
      </div>
    </template>
    <ul class="mt-2 mb-6">
      <li class="p-2 text-sm">
        Dentro de {{ categoriaSeleccionada.label }}:
        <!--
        <SfListItem size="sm" tag="button" type="button" disabled>
          <div class="flex items-center">

          </div>
        </SfListItem>-->
      </li>
      <li v-for="(category, index) in categories" :key="category.key">
        <SfListItem
            size="sm"
            tag="a"
            :href="category.link"
            :class="['first-of-type:mt-2 rounded-md active:bg-primary-100']"
        >
          <template #suffix>

          </template>
          <span class="flex items-center">
            {{ category.label }}
            <SfCounter class="ml-2 typography-text-sm font-normal">{{ category.counter }}</SfCounter>
          </span>
        </SfListItem>
      </li>
      <!-- { 'bg-primary-100 hover:bg-primary-100 active:bg-primary-100 font-medium': index === 0 } -->
      <!-- <SfIconCheck v-if="index === 0" size="sm" class="text-primary-700" /> -->
    </ul>
  </SfAccordionItem>
</template>

<style scoped>

</style>
