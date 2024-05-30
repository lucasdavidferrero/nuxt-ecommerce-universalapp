<script setup lang="ts">
import { ref, computed } from 'vue';

function getPreviousIndex(current: number, elements: HTMLButtonElement[]) {
  for (let index = current - 1; index >= 0; index -= 1) {
    if (!elements[index].disabled) {
      return index;
    }
  }
  for (let index = elements.length - 1; index > -1; index -= 1) {
    if (!elements[index].disabled) {
      return index;
    }
  }
  return current;
}

function getNextIndex(current: number, elements: HTMLButtonElement[]) {
  for (let index = current + 1; index < elements.length; index += 1) {
    if (!elements[index].disabled) {
      return index;
    }
  }
  for (let index = 0; index < elements.length; index += 1) {
    if (!elements[index].disabled) {
      return index;
    }
  }
  return current;
}

interface Tab {
  label: string;
  content?: string;
  disabled?: boolean;
}

const tabs: Tab[] = [
  { label: 'Descripcion', content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.' },
  { label: 'Dimensiones', content: 'Ancho: 20cm. Alto: 40cm. Profundidad: 10cm. Peso: 13KG ' }
];

const tablistRef = ref<HTMLDivElement>();
const activeTab = ref<Tab>(tabs[0]);
const isActive = computed(() => (tab: Tab) => activeTab.value.label === tab.label);
const tabId = (label: string) => `${label}-tab`;
const panelId = (label: string) => `${label}-panel`;

const handleKeyDown = (event: KeyboardEvent) => {
  const elements = Array.from(tablistRef.value?.querySelectorAll<HTMLButtonElement>('[role="tab"]') || []);
  const current = elements.findIndex((el) => event.currentTarget === el);
  const nextTab = getNextIndex(current, elements);
  const prevTab = getPreviousIndex(current, elements);
  const lastTab = elements.length - 1;
  const goTo = (index: number) => () => {
    event.stopPropagation();
    event.preventDefault();
    const goToElement = elements[index];
    goToElement.focus();
    goToElement.click();
    goToElement.scrollIntoView();
  };
  const interactionsMap = new Map([
    ['ArrowLeft', goTo(prevTab)],
    ['ArrowRight', goTo(nextTab)],
    ['Home', goTo(0)],
    ['End', goTo(lastTab)],
  ]);
  const interaction = interactionsMap.get(event.key);
  interaction?.();
};
</script>

<template>
  <div
      ref="tablistRef"
      role="tablist"
      aria-label="Select tab"
      aria-orientation="horizontal"
      class="flex gap-2 border-b border-b-neutral-200 pb-1 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
  >
    <button
        v-for="tab in tabs"
        :id="tabId(tab.label)"
        :key="tab.label"
        type="button"
        role="tab"
        :aria-controls="panelId(tab.label)"
        :aria-selected="isActive(tab)"
        :disabled="tab.disabled"
        :tabindex="isActive(tab) ? 0 : -1"
        :class="[
        'px-4 py-2 rounded-md font-medium whitespace-nowrap text-neutral-500 hover:enabled:bg-primary-100 hover:enabled:text-primary-800 active:enabled:bg-primary-200 active:enabled:text-primary-900 disabled:text-disabled-500 focus-visible:outline focus-visible:-outline-offset-2 focus-visible:shadow-[inset_0_0_0_4px_rgb(255,255,255)]',
        isActive(tab) ? '!bg-neutral-100 !text-black' : '',
      ]"
        @click="activeTab = tab"
        @keydown="handleKeyDown"
    >
      {{ tab.label }}
    </button>
  </div>

  <div
      v-for="tab in tabs"
      :id="panelId(tab.label)"
      :key="tab.label"
      role="tabpanel"
      :aria-labelledby="tabId(tab.label)"
  >
    <p v-if="isActive(tab)" class="p-4">{{ tab.content }}</p>
  </div>
</template>

<style scoped>

</style>
