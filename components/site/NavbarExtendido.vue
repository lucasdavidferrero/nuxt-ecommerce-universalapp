<script setup lang="ts">
import { ref } from 'vue'
import { SfListItem, SfButton, SfIconMenu, SfDropdown, useDisclosure, SfIconChevronRight } from '@storefront-ui/vue'

const { isOpen, toggle, close, open } = useDisclosure();
const rubrosDeAccesoRapido = [
  { aik_re2_codigo: '00002', aik_re2_descri: 'CALEFACCION' },
  { aik_re2_codigo: '00008', aik_re2_descri: 'SMARTWATCH' },
  { aik_re2_codigo: '00011', aik_re2_descri: 'COCINAS Y HORNOS' },
  { aik_re2_codigo: '00013', aik_re2_descri: 'TERMOTANQUE Y CALEFON'}
]
const listadoCategorias = [
  {
    aik_re1_codigo: '00001',
    aik_re1_descri: 'CLIMATIZACION',
    rubros: [
      {
        aik_re2_codigo: '00001',
        aik_re2_descri: 'REFRIGERACION',
        familias: [
          { aik_fa_codigo: '0002', aik_fa_nombre: 'AIRE COMPACTO' },
          { aik_fa_codigo: '0003', aik_fa_nombre: 'AIRE PORTATIL' },
          { aik_fa_codigo: '0004', aik_fa_nombre: 'AIRE SPLIT' },
          { aik_fa_codigo: '0228', aik_fa_nombre: 'VENTILADOR' },
          { aik_fa_codigo: '0059', aik_fa_nombre: 'CLIMATIZADOR' }
        ]
      },
      {
        aik_re2_codigo: '00002',
        aik_re2_descri: 'CALEFACCION',
        familias: [
          { aik_fa_codigo: '0088', aik_fa_nombre: 'ESTUFA' },
          { aik_fa_codigo: '0039', aik_fa_nombre: 'CALEFACTOR' },
          { aik_fa_codigo: '0160', aik_fa_nombre: 'PANTALLA A GAS' },
          { aik_fa_codigo: '0126', aik_fa_nombre: 'LEÑOS A GAS' },
          { aik_fa_codigo: '0108', aik_fa_nombre: 'HOGAR DE PIEDRA' }
        ]
      }
    ]
  },
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
type Node = {
  key: string;
  codigo: string;
  value: {
    label: string;
    counter: number;
    link?: string;
  };
  children?: Node[];
  isLeaf: boolean;
};
const content: Node = {
  key: 'root',
  codigo: 'root',
  value: { label: '', counter: 0 },
  isLeaf: false,
  children: [
    {
      key: 'CLIMATIZACION',
      codigo: '00001',
      value: {
        label: 'Climatizacion',
        counter: 100,
        link: '#categoriaClimatizacion'
      },
      isLeaf: false,
      children: [
        {
          key: 'REFRIGERACION',
          codigo: '00001',
          value: { label: 'Refrigeracion', counter: 178, link: '#rubroRefrigeracion' },
          isLeaf: false,
          children: [
            {
              key: 'AIRE COMPACTO',
              codigo: '0002',
              value: { label: 'Aire Compacto', counter: 178, link: '#familiaAireCompacto' },
              isLeaf: true,
            },
            {
              key: 'AIRE PORTATIL',
              codigo: '0003',
              value: { label: 'Aire Portatil', counter: 178, link: '#familiaAirePortatil' },
              isLeaf: true,
            },
            {
              key: 'AIRE SPLIT',
              codigo: '0004',
              value: { label: 'Aire Split', counter: 178, link: '#familiaAireSplit' },
              isLeaf: true,
            },
            {
              key: 'VENTILADOR',
              codigo: '0228',
              value: { label: 'Ventilador', counter: 178, link: '#familiaVentilador' },
              isLeaf: true,
            },
            {
              key: 'CLIMATIZADOR',
              codigo: '0059',
              value: { label: 'Climatizador', counter: 178, link: '#familiaClimatizador' },
              isLeaf: true,
            },
          ],
        },
        {
          key: 'CALEFACCION',
          codigo: '00002',
          value: { label: 'Calefaccion', counter: 178, link: '#rubroCalefaccion' },
          isLeaf: false,
          children: [
            {
              key: 'ESTUFA',
              codigo: '0088',
              value: { label: 'Estufa', counter: 178, link: '#familiaEstufa' },
              isLeaf: true,
            },
            {
              key: 'CALEFACTOR',
              codigo: '0039',
              value: { label: 'Calefactor', counter: 178, link: '#familiaCalefactor' },
              isLeaf: true,
            },
            {
              key: 'PANTALLA A GAS',
              codigo: '0160',
              value: { label: 'Pantalla a gas', counter: 178, link: '#familiaPantallaGas' },
              isLeaf: true,
            },
            {
              key: 'LEÑOS A GAS',
              codigo: '0126',
              value: { label: 'Leños a gas', counter: 178, link: '#familiaLeñosAGas' },
              isLeaf: true,
            },
            {
              key: 'HOGAR DE PIEDRA',
              codigo: '0108',
              value: { label: 'Hogar de piedra', counter: 178, link: '#familiaHogarDePiedra' },
              isLeaf: true,
            }
          ],
        },
      ],
    },
    {
      key: 'TV AUDIO VIDEO',
      codigo: '00002',
      value: {
        label: 'TV audio y video',
        counter: 364,
        link: '#categoriaTvAudioVideo'
      },
      isLeaf: false,
      children: [],
    },
    {
      key: 'TECNOLOGIA',
      codigo: '00003',
      value: {
        label: 'Tecnologia',
        counter: 263,
        link: '#categoriaTecnologia'
      },
      isLeaf: false,
      children: [],
    },
    {
      key: 'ELECTRODOMESTICOS',
      codigo: '00004',
      value: {
        label: 'ELECTRODOMESTICOS',
        counter: 111,
        link: '#categoriaElectrodomesticos'
      },
      isLeaf: false,
      children: []
    },
    {
      key: 'HOGAR',
      codigo: '00005',
      value: {
        label: 'Hogar',
        counter: 123,
        link: '#categoriaHogar'
      },
      isLeaf: false,
      children: []
    },
    {
      key: 'SALUD Y BELLEZA',
      codigo: '00006',
      value: {
        label: 'Salud y belleza',
        counter: 123,
        link: '#categoriaSaludBelleza'
      },
      isLeaf: false,
      children: []
    },
    {
      key: 'MUEBLES',
      codigo: '00007',
      value: {
        label: 'Muebles',
        counter: 123,
        link: '#categoriaMuebles'
      },
      isLeaf: false,
      children: []
    },
    {
      key: 'AIRE LIBRE',
      codigo: '00008',
      value: {
        label: 'Aire libre',
        counter: 123,
        link: '#categoriaAireLibre'
      },
      isLeaf: false,
      children: []
    },
    {
      key: 'COLCHONES Y SOMMIERS',
      codigo: '00009',
      value: {
        label: 'Colchones y sommiers',
        counter: 123,
        link: '#categoriaColchonesSommiers'
      },
      isLeaf: false,
      children: []
    },
    {
      key: 'OFICINA',
      codigo: '00010',
      value: {
        label: 'Oficina',
        counter: 123,
        link: '#categoriaOficina'
      },
      isLeaf: false,
      children: []
    },
    {
      key: 'RODADOS',
      codigo: '00011',
      value: {
        label: 'Rodados',
        counter: 123,
        link: '#categoriaRodados'
      },
      isLeaf: false,
      children: []
    },
    {
      key: 'NIÑOS',
      codigo: '00012',
      value: {
        label: 'NIÑOS',
        counter: 123,
        link: '#categoriaNiños'
      },
      isLeaf: false,
      children: []
    }
  ]
}
const findNode = (keys: string[], node: Node): Node => {
  if (keys.length > 1) {
    const [currentKey, ...restKeys] = keys;
    return findNode(restKeys, node.children?.find((child) => child.key === currentKey) || node);
  } else {
    return node.children?.find((child) => child.key === keys[0]) || node;
  }
};
const activeNode = ref<string[]>([]);
const openMenu = (menuType: string[]) => {
  activeNode.value = menuType;
  open();
};
const activeMenu = computed(() => findNode(activeNode.value, content));
</script>

<template>
  <div>
    <div>
      <!-- Desktop dropdown -->
      <nav ref="floatingRef">
        <ul class="hidden md:flex px-6 py-2 border-b border-b-neutral-200 border-b-solid max-w-[1536px]">
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
              <ul class="p-2 rounded-md border border-neutral-300 border-solid flex bg-primary-50 shadow-2xl">
                <!-- Categorías -->
                <div class="max-w-sm">
                  <SfListItem
                      v-for="(menuNode, index) in content.children"
                      :key="menuNode.key"
                      class="hover:bg-primary-200"
                      :href="menuNode.value.link"
                      tag="a"
                      @mouseenter="openMenu([menuNode.key])">
                    <span class="break-words">
                      {{ normalizarDescripcionesJerarquia(menuNode.value.label) }}
                    </span>
                    <template #suffix><SfIconChevronRight /></template>
                  </SfListItem>
                </div>
                <!-- Rubros y Familias Links -->
                <div v-if="isOpen && activeNode.length === 1" class="hidden md:grid gap-x-4 grid-cols-4 py-6 left-0 right-0 outline-none"
                     @mouseleave="close()">
                  <template v-for="node in activeMenu.children">
                    <div class="flex-col">
                      <div>
                        <p
                            class="typography-text-base font-medium text-neutral-900 whitespace-nowrap px-4 py-1.5 border-b border-b-neutral-200 border-b-solid
                            hover:text-primary-800"
                        >
                          <NuxtLink :to="node.value.link">{{ node.value.label }}</NuxtLink>
                        </p>
                      </div>
                      <ul class="mt-2">
                        <li v-for="child in node.children" :key="child.key">
                          <SfListItem tag="a" size="sm" :href="child.value.link"
                                      class="typography-text-sm py-1.5 hover:text-primary-800 hover:bg-primary-200">
                            {{ child.value.label }}
                          </SfListItem>
                        </li>
                      </ul>
                    </div>
                  </template>
                </div>

              </ul>
            </SfDropdown>
          </li>

          <!-- Rubros de acceso rápido  -->
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
