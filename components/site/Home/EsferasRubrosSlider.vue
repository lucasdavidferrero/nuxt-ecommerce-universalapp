<script setup lang="ts">
import { SfScrollable, SfButton, SfIconChevronLeft, SfIconChevronRight, SfLink } from "@storefront-ui/vue";

const esferasRubros = [
  { aik_re2_codigo: '00015', aik_re2_descri: 'Cafeteras', src: '/esferas/Cafeteras.png'},
  { aik_re2_codigo: '00007', aik_re2_descri: 'Cocinas', src: '/esferas/Cocinas.png'},
  { aik_re2_codigo: '00012', aik_re2_descri: 'Colchones', src: '/esferas/Colchones.png'},
  { aik_re2_codigo: '00019', aik_re2_descri: 'Heladeras', src: '/esferas/Heladeras.png'},
  { aik_re2_codigo: '00030', aik_re2_descri: 'Lavarropas', src: '/esferas/Lavarropas.png'},
  { aik_re2_codigo: '00065', aik_re2_descri: 'Cafeteras', src: '/esferas/Cafeteras.png'},
  { aik_re2_codigo: '00008', aik_re2_descri: 'Cocinas', src: '/esferas/Cocinas.png'},
  { aik_re2_codigo: '00013', aik_re2_descri: 'Colchones', src: '/esferas/Colchones.png'},
  { aik_re2_codigo: '00020', aik_re2_descri: 'Heladeras', src: '/esferas/Heladeras.png'},
  { aik_re2_codigo: '00031', aik_re2_descri: 'Lavarropas', src: '/esferas/Lavarropas.png'}
]
</script>

<template>
  <SfScrollable
      class="m-auto py-4 items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      buttons-placement="floating"
      drag
  >
    <template #previousButton="defaultProps">
      <SfButton
          v-bind="defaultProps"
          class="absolute !rounded-full z-10 left-4 bg-white hidden md:block"
          :class="{ '!hidden': defaultProps.disabled }"
          variant="secondary"
          size="lg"
          square
      >
        <SfIconChevronLeft />
      </SfButton>
    </template>

    <div
        v-for="{ aik_re2_codigo, aik_re2_descri, src } in esferasRubros"
        :key="aik_re2_codigo"
        class="first:ms-auto last:me-auto border border-neutral-200 shrink-0 rounded-md hover:shadow-lg w-[148px] lg:w-[192px]"
    >
      <div class="relative">
        <SfLink href="#" class="block no-underline">
          <img
              :src="src"
              :alt="aik_re2_descri"
              class="block object-cover h-auto rounded-md aspect-square lg:w-[190px] lg:h-[190px] p-2"
              width="146"
              height="146"
          />
          <p class="text-lg text-center text-black">{{ aik_re2_descri }}</p>
        </SfLink>
      </div>
    </div>

    <template #nextButton="defaultProps">
      <SfButton
          v-bind="defaultProps"
          class="absolute !rounded-full z-10 right-4 bg-white hidden md:block"
          :class="{ '!hidden': defaultProps.disabled }"
          variant="secondary"
          size="lg"
          square
      >
        <SfIconChevronRight />
      </SfButton>
    </template>
  </SfScrollable>
</template>

<style scoped>

</style>
