<script setup lang="ts">
import { ref } from 'vue';
import { SfAccordionItem, SfCheckbox, SfCounter, SfIconChevronLeft, SfListItem } from '@storefront-ui/vue';

const open = ref(true);
const selectedFilters = ref<string[]>([]);
const isItemActive = (selectedValue: string) => {
  return selectedFilters.value?.includes(selectedValue);
};

const details = ref([
  { id: 'b1', label: 'ACER', value: 'acer', counter: 10 },
  { id: 'b2', label: 'AURORA', value: 'aurora', counter: 100 },
  { id: 'b3', label: 'BENQ', value: 'benq', counter: 0 },
  { id: 'b4', label: 'BLACK & DECKER', value: 'blackanddecker', counter: 3 },
  { id: 'b6', label: 'CASE LOGIC', value: 'caselogic', counter: 3 },
  { id: 'b7', label: 'CASIO', value: 'casio', counter: 10 },
  { id: 'b8', label: 'DREAN', value: 'drean', counter: 20 },
  { id: 'b9', label: 'EVEREST', value: 'everest', counter: 5 },
]);
</script>

<template>
  <SfAccordionItem v-model="open" class="w-full md:max-w-[376px]">
    <template #summary>
      <div class="flex justify-between p-2 mb-2">
        <p class="font-medium">Marca</p>
        <SfIconChevronLeft :class="['text-neutral-500', open ? 'rotate-90' : '-rotate-90']" />
      </div>
    </template>
    <SfListItem
        v-for="{ id, value, label, counter } in details"
        :key="id"
        tag="label"
        size="sm"
        :disabled="counter === 0"
        :class="['px-1.5 bg-transparent hover:bg-transparent', { 'font-medium': isItemActive(value) }]"
    >
      <template #prefix>
        <SfCheckbox v-model="selectedFilters" class="flex items-center" :disabled="counter === 0" :value="value" />
      </template>
      <p>
        <span class="mr-2 text-sm">{{ label }}</span>
        <SfCounter size="sm">{{ counter }}</SfCounter>
      </p>
    </SfListItem>
  </SfAccordionItem>
</template>

<style scoped>

</style>
