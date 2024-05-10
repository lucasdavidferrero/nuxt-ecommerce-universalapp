<script setup lang="ts">
import { ref } from 'vue'
import { SfListItem, SfButton, SfIconMenu, SfDropdown, useDisclosure, SfIconChevronRight } from '@storefront-ui/vue'

const { isOpen, toggle } = useDisclosure();
const rubrosDeAccesoRapido = [
  { aik_re2_codigo: '00002', aik_re2_descri: 'CALEFACCION' },
  { aik_re2_codigo: '00008', aik_re2_descri: 'SMARTWATCH' },
  { aik_re2_codigo: '00011', aik_re2_descri: 'COCINAS Y HORNOS' },
  { aik_re2_codigo: '00013', aik_re2_descri: 'TERMOTANQUE Y CALEFON'}
]
const listadoCategorias = [
  { aik_re1_codigo: '00001', aik_re1_descri: 'CLIMATIZACION' },
  { aik_re1_codigo: '00002', aik_re1_descri: 'TV AUDIO VIDEO' },
  { aik_re1_codigo: '00003', aik_re1_descri: 'TECNOLOGIA' },
  { aik_re1_codigo: '00004', aik_re1_descri: 'ELECTRODOMESTICOS' },
  { aik_re1_codigo: '00005', aik_re1_descri: 'HOGAR' },
  { aik_re1_codigo: '00006', aik_re1_descri: 'SALUD Y BELLEZA'},
  { aik_re1_codigo: '00007', aik_re1_descri: 'MUEBLES'},
  { aik_re1_codigo: '00008', aik_re1_descri: 'AIRE LIBRE'},
  { aik_re1_codigo: '00009', aik_re1_descri: 'COLCHONES Y SOMMIERS'},
  { aik_re1_codigo: '00010', aik_re1_descri: 'OFICINA'},
  { aik_re1_codigo: '00011', aik_re1_descri: 'RODADOS'},
  { aik_re1_codigo: '00012', aik_re1_descri: 'NIÑOS'},
]

function normalizarDescripcionesJerarquia (descripcion: string) {
  return descripcion[0] + descripcion.slice(1).toLowerCase()
}
</script>

<template>
  <div>
    <div>
      <!-- Desktop dropdown -->
      <nav ref="floatingRef">
        <ul class="hidden md:flex px-6 py-2 border-b border-b-neutral-200 border-b-solid">
          <li>
            <SfDropdown v-model="isOpen" placement="bottom-start">
              <template #trigger>
                <SfButton
                    ref="triggerRefs"
                    variant="tertiary"
                    class="group mr-2 !text-neutral-900 hover:!bg-neutral-200 hover:!text-neutral-700 active:!bg-neutral-300 active:!text-neutral-900"
                    @mouseenter="toggle"
                    @click="toggle"
                >
                  <SfIconMenu
                      class="text-neutral-500 group-hover:text-neutral-700 group-active:text-neutral-900 "></SfIconMenu>
                  <span>Categorías</span>
                </SfButton>
              </template>
              <ul class="p-2 rounded bg-white shadow-md">
                <!-- Categorías -->
                <div class="max-w-sm">
                  <SfListItem v-for="categoriaItem in listadoCategorias">
                    <span class="break-words">{{ normalizarDescripcionesJerarquia(categoriaItem.aik_re1_descri) }}</span>
                    <template #suffix><SfIconChevronRight /></template>
                  </SfListItem>
                </div>

                <!-- Rubros y Familias Links -->
                <div></div>
              </ul>
            </SfDropdown>
          </li>
          <li v-for="rubro in rubrosDeAccesoRapido">
            <SfButton
                ref="triggerRefs"
                variant="tertiary"
                class="group mr-2 !text-neutral-900 hover:!bg-neutral-200 hover:!text-neutral-700 active:!bg-neutral-300 active:!text-neutral-900"
                @click=""
            >
              <span>{{ normalizarDescripcionesJerarquia(rubro.aik_re2_descri)}}</span>
              <!--<SfIconChevronRight
                  class="rotate-90 text-neutral-500 group-hover:text-neutral-700 group-active:text-neutral-900"
              />-->
            </SfButton>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>

</style>
