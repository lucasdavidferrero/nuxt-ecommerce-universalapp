<script setup lang="ts">
import { SfButton } from "@storefront-ui/vue";
import type { RubroAccesoDirecto } from "~/components/site/Navbar.types";
import { textoPrimerLetraMayusculaRestoMinuscula } from "~/utils/textFormatUtils";

const rubrosDeAccesoDirecto: RubroAccesoDirecto[] = [
  { aik_re2_codigo: '00002', aik_re2_descri: 'CALEFACCION' },
  { aik_re2_codigo: '00008', aik_re2_descri: 'SMARTWATCH' },
  { aik_re2_codigo: '00011', aik_re2_descri: 'COCINAS Y HORNOS' },
  { aik_re2_codigo: '00013', aik_re2_descri: 'TERMOTANQUE Y CALEFON'}
]

</script>

<template>
  <li v-for="rubro in rubrosDeAccesoDirecto">
    <SfButton
        variant="tertiary"
        class="group mr-2 !text-neutral-900 hover:!bg-neutral-200 hover:!text-neutral-700 active:!bg-neutral-300 active:!text-neutral-900"
        @click=""
    >
      <span>{{ textoPrimerLetraMayusculaRestoMinuscula(rubro.aik_re2_descri)}}</span>
      <!--<SfIconChevronRight
          class="rotate-90 text-neutral-500 group-hover:text-neutral-700 group-active:text-neutral-900"
      />-->
    </SfButton>
  </li>
</template>

<style scoped>

</style>
