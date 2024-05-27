<script setup lang="ts">
import { SfIconClose } from '@storefront-ui/vue'
import PrimaryHeading from "~/components/site/PrimaryHeading.vue";
import JerarquiaFiltroCategorias from '~/components/site/ArticuloGrillaResultado/JerarquiaFiltroCategorias.vue'
import MarcasFiltro from "~/components/site/ArticuloGrillaResultado/MarcasFiltro.vue";
import ListadoProductosGrillaResultado
  from "~/components/site/ArticuloGrillaResultado/ListadoProductosGrillaResultado.vue";
</script>

<template>
  <section>
    <Container>
      <div class="mt-4 lg:flex gap-x-4">
        <aside class="w-full md:max-w-[376px] bg-white p-4 rounded-md">
          <div class="flex justify-between mb-4">
            <h4 class="px-2 font-bold typography-headline-4">Filtros</h4>
            <button type="button" class="md:hidden text-neutral-500" aria-label="Close filters panel">
              <SfIconClose />
            </button>
          </div>
          <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 w-full">
          <!-- Filtrados y Ordenar Por... -->
          <JerarquiaFiltroCategorias />

          <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 w-full">

          <MarcasFiltro />
        </aside>
        <div>
          <!-- Listado de Productos -->
          <PrimaryHeading>Climatización</PrimaryHeading>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ListadoProductosGrillaResultado />
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>

</style>
