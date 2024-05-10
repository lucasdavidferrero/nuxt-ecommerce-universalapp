<script setup lang="ts">
import { ref } from 'vue'
import { SfListItem, SfButton, SfIconMenu, SfDropdown, useDisclosure, SfIconChevronRight } from '@storefront-ui/vue'

const { isOpen, toggle } = useDisclosure();

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
</script>

<template>
  <div>
    <div>
      <!-- Desktop dropdown -->
      <nav ref="floatingRef">
        <ul class="hidden md:flex px-6 py-2 bg-primary-800 border-b border-b-neutral-200 border-b-solid">
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
                      class="text-neutral-500 group-hover:text-neutral-700 group-active:text-neutral-900 mt-0.5"></SfIconMenu>
                  <span>Categorías</span>
                </SfButton>
              </template>
              <ul class="p-2 rounded bg-white shadow-md">
                <!-- Categorías -->
                <div class="max-w-sm">
                  <SfListItem v-for="categoriaItem in listadoCategorias">
                    <span class="break-words">{{ categoriaItem.aik_re1_descri }}</span>
                    <template #suffix><SfIconChevronRight /></template>
                  </SfListItem>
                </div>

                <!-- Rubros y Familias Links -->
                <div></div>
              </ul>
            </SfDropdown>
            <!--<div
                v-if="isOpen && activeNode.length === 1 && activeNode[0] === menuNode.key"
                :key="activeMenu.key"
                ref="megaMenuRef"
                :style="style"
                class="hidden md:grid gap-x-6 grid-cols-4 bg-white shadow-lg p-6 left-0 right-0 outline-none"
                tabindex="0"
                @mouseleave="close()"
                @keydown.esc="focusTrigger(index)"
            >
              <template v-for="node in activeMenu.children" :key="node.key">
                <template v-if="node.isLeaf">
                  <SfListItem tag="a" size="sm" :href="node.value.link" class="typography-text-sm mb-2">
                    {{ node.value.label }}
                  </SfListItem>
                  <div class="col-start-2 col-end-5" />
                </template>
                <div v-else>
                  <p
                      class="typography-text-base font-medium text-neutral-900 whitespace-nowrap px-4 py-1.5 border-b border-b-neutral-200 border-b-solid"
                  >
                    {{ node.value.label }}
                  </p>
                  <ul class="mt-2">
                    <li v-for="child in node.children" :key="child.key">
                      <SfListItem tag="a" size="sm" :href="child.value.link" class="typography-text-sm py-1.5">
                        {{ child.value.label }}
                      </SfListItem>
                    </li>
                  </ul>
                </div>
              </template>
              <div
                  class="flex flex-col items-center justify-center overflow-hidden rounded-md bg-neutral-100 border-neutral-300 grow"
              >
                <img :src="bannerNode.value.banner" :alt="bannerNode.value.bannerTitle" class="object-contain" />
                <p class="px-4 mt-4 mb-4 font-medium text-center typography-text-base">
                  {{ bannerNode.value.bannerTitle }}
                </p>
              </div>
            </div>-->
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>

</style>
