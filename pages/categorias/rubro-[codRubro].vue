<script setup lang="ts">
import { useDisclosure, SfButton, SfIconTune, SfIconClose } from '@storefront-ui/vue';
import ListadoProductosGrillaResultado
  from "~/components/site/ArticuloGrillaResultado/ListadoProductosGrillaResultado.vue";
import PrimaryHeading from "~/components/site/PrimaryHeading.vue";
import MarcasFiltro from "~/components/site/ArticuloGrillaResultado/MarcasFiltro.vue";
import JerarquiaFiltroRubros from "~/components/site/ArticuloGrillaResultado/JerarquiaFiltroRubros.vue";
import { useTailwindBreakpoints } from "~/composables/useTailwindBreakpoints"
import { watch } from 'vue'

const breakpoints = useTailwindBreakpoints()
const greaterThanLg = breakpoints.greater('lg')

const { isOpen, toggle, open, close } = useDisclosure();

isOpen.value = greaterThanLg.value

watch(greaterThanLg, (newVal, oldVal) => {
  isOpen.value = greaterThanLg.value
})

</script>

<template>
  <section>
    <Container>
      <div class="mt-4 lg:flex gap-x-8">
        <div class="bg-white p-4 rounded-md lg:hidden mb-4">
          <SfButton @click="isOpen = !isOpen">
            <template #prefix>
              <SfIconTune />
            </template>
            Filtros
          </SfButton>
        </div>
        <aside class="w-full lg:max-w-[320px] bg-white p-4 rounded-md mb-4" v-if="isOpen">
          <div class="flex justify-between mb-4">
            <h4 class="px-2 font-bold typography-headline-4">Filtros</h4>
            <button @click="close" type="button" class="lg:hidden text-neutral-500" aria-label="Close filters panel">
              <SfIconClose />
            </button>
          </div>
          <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 w-full">
          <!-- Filtrados y Ordenar Por... -->
          <JerarquiaFiltroRubros />

          <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 w-full">

          <MarcasFiltro />
        </aside>
        <div>
          <!-- Listado de Productos -->
          <PrimaryHeading class="mb-4">Aire Compacto</PrimaryHeading>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ListadoProductosGrillaResultado />
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>

</style>
