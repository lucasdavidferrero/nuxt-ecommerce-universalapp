<script setup lang="ts">
import { ref } from 'vue'
import { SfListItem, SfButton, SfIconMenu, SfDropdown, useDisclosure, useTrapFocus, SfIconChevronRight, SfIconArrowBack,
  SfIconClose, SfCounter, SfDrawer} from '@storefront-ui/vue'
import NavbarRubrosAccesoDirecto from "~/components/site/NavbarRubrosAccesoDirecto.vue";
import { textoPrimerLetraMayusculaRestoMinuscula } from "~/utils/textFormatUtils"

const { isOpen, toggle, close, open } = useDisclosure();

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
  return textoPrimerLetraMayusculaRestoMinuscula(descripcion)
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
const selectedCategoryKey = ref('CLIMATIZACION')
activeNode.value = ['CLIMATIZACION']
const openMenu = (menuType: string[]) => {
  selectedCategoryKey.value = menuType[0]
  activeNode.value = menuType;
  open();
};
function closeMenu () {
  close()
}
const activeMenu = computed(() => findNode(activeNode.value, content));

const trapFocusOptions = {
  activeState: isOpen,
  arrowKeysUpDown: true,
  initialFocus: 'container',
} as const;
const drawerRef = ref();
const goBack = () => {
  activeNode.value = activeNode.value.slice(0, activeNode.value.length - 1);
};

const goNext = (key: string) => {
  activeNode.value = [...activeNode.value, key];
};
useTrapFocus(drawerRef, trapFocusOptions);
</script>

<template>
  <div class="border-b border-b-neutral-200 border-b-solid ">
    <div class="container mx-auto px-4 py-2 md:hidden">
      <SfButton
          variant="primary"
          square
          aria-label="Close menu"
          class="block bg-primary-800 hover:bg-primary-900 hover:text-white active:bg-primary-900"
          @click="openMenu([])"
      >
        <SfIconMenu class="text-white" />
      </SfButton>
    </div>
    <div class="container mx-auto px-4">
      <!-- Desktop dropdown -->
      <nav ref="floatingRef">
        <ul class="hidden md:flex py-2">
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
              <ul class="p-2 rounded-md border border-neutral-400 bg-neutral-100 border-solid flex shadow-2xl container px-4" @mouseleave="closeMenu">
                <!-- Categorías -->
                <div class="w-3/12">
                  <SfListItem
                      v-for="(menuNode, index) in content.children"
                      :key="menuNode.key"
                      class="rounded-lg"
                      :class="(selectedCategoryKey === menuNode.key) ? 'bg-slate-300 hover:bg-slate-300': ''"
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
                <div v-if="isOpen && activeNode.length === 1" class="hidden md:grid gap-x-4 grid-cols-4 py-6 left-0 right-0 outline-none w-9/12">
                  <template v-for="node in activeMenu.children">
                    <div class="flex-col">
                      <div>
                        <p
                            class="typography-text-base font-medium text-neutral-900 whitespace-nowrap px-4 py-1.5 border-b border-b-neutral-200 border-b-solid"
                        >
                          <NuxtLink :to="node.value.link" class="hover:text-primary-600 hover:underline">{{ node.value.label }}</NuxtLink>
                        </p>
                      </div>
                      <ul class="mt-2">
                        <li v-for="child in node.children" :key="child.key">
                          <SfListItem tag="a" size="sm" :href="child.value.link"
                                      class="typography-text-sm py-1.5 hover:bg-slate-300 rounded-lg">
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
          <NavbarRubrosAccesoDirecto />
          <!--<li v-for="rubro in rubrosDeAccesoRapido">
            <SfButton
                ref="triggerRefs"
                variant="tertiary"
                class="group mr-2 !text-neutral-900 hover:!bg-neutral-200 hover:!text-neutral-700 active:!bg-neutral-300 active:!text-neutral-900"
                @click=""
            >
              <span>{{ normalizarDescripcionesJerarquia(rubro.aik_re2_descri)}}</span>
              <SfIconChevronRight
                  class="rotate-90 text-neutral-500 group-hover:text-neutral-700 group-active:text-neutral-900"
              />
            </SfButton>
          </li>-->
        </ul>
      </nav> <!-- End Desktop Nav -->

      <!-- Mobile drawer -->
      <div v-if="isOpen" class="md:hidden fixed inset-0 bg-neutral-500 bg-opacity-50" />
      <SfDrawer
          ref="drawerRef"
          v-model="isOpen"
          placement="left"
          class="md:hidden right-[50px] max-w-[376px] bg-white overflow-y-auto"
      >
        <nav>
          <div class="flex items-center justify-between p-4 border-b border-b-neutral-200 border-b-solid">
            <p class="typography-text-base font-medium">Encontra productos</p>
            <SfButton variant="tertiary" square aria-label="Close menu" class="ml-2" @click="close()">
              <SfIconClose class="text-neutral-500" />
            </SfButton>
          </div>
          <ul class="mt-2 mb-6">
            <li v-if="activeMenu.key !== 'root'">
              <SfListItem
                  size="lg"
                  tag="button"
                  type="button"
                  class="border-b border-b-neutral-200 border-b-solid"
                  @click="goBack()"
              >
                <div class="flex items-center">
                  <SfIconArrowBack class="text-neutral-500" />
                  <p class="ml-5 font-medium">{{ activeMenu.value.label }}</p>
                </div>
              </SfListItem>
            </li>
            <template v-for="node in activeMenu.children" :key="node.value.label">
              <li v-if="node.isLeaf">
                <SfListItem size="lg" tag="a" :href="node.value.link" class="first-of-type:mt-2">
                  <div class="flex items-center">
                    <p class="text-left">{{ node.value.label }}</p>
                    <SfCounter class="ml-2">{{ node.value.counter }}</SfCounter>
                  </div>
                </SfListItem>
              </li>
              <li v-else>
                <SfListItem size="lg" tag="button" type="button" @click="goNext(node.key)">
                  <div class="flex justify-between items-center">
                    <div class="flex items-center">
                      <p class="text-left">{{ node.value.label }}</p>
                      <SfCounter class="ml-2">{{ node.value.counter }}</SfCounter>
                    </div>
                    <SfIconChevronRight class="text-neutral-500" />
                  </div>
                </SfListItem>
              </li>
            </template>
          </ul>
        </nav>
      </SfDrawer>


    </div>
  </div>
</template>

<style scoped>
</style>
