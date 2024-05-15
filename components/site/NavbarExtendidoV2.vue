<script setup lang="ts">
import {
  SfIconShoppingCart,
  SfIconFavorite,
  SfIconPerson,
  SfIconClose,
  SfButton,
  SfDrawer,
  SfListItem,
  SfIconChevronRight,
  SfIconMenu,
  SfCounter,
  SfIconArrowBack,
  useDisclosure,
  useTrapFocus,
  useDropdown,
  SfInput,
  SfIconSearch,
} from '@storefront-ui/vue';
import { ref, computed } from 'vue';
import { unrefElement } from '@vueuse/core';

const findNode = (keys: string[], node: Node): Node => {
  if (keys.length > 1) {
    const [currentKey, ...restKeys] = keys;
    return findNode(restKeys, node.children?.find((child) => child.key === currentKey) || node);
  } else {
    return node.children?.find((child) => child.key === keys[0]) || node;
  }
};

const { close, open, isOpen } = useDisclosure();
const { referenceRef, floatingRef, style } = useDropdown({
  isOpen,
  onClose: close,
  placement: 'bottom-start',
  middleware: [],
});

const drawerRef = ref();
const megaMenuRef = ref();
const triggerRefs = ref();
const activeNode = ref<string[]>([]);

const activeMenu = computed(() => findNode(activeNode.value, content));
const bannerNode = computed(() => findNode(activeNode.value.slice(0, 1), content));

const trapFocusOptions = {
  activeState: isOpen,
  arrowKeysUpDown: true,
  initialFocus: 'container',
} as const;
useTrapFocus(
    computed(() => megaMenuRef.value?.[0]),
    trapFocusOptions,
);
useTrapFocus(drawerRef, trapFocusOptions);

const openMenu = (menuType: string[]) => {
  activeNode.value = menuType;
  open();
};

const goBack = () => {
  activeNode.value = activeNode.value.slice(0, activeNode.value.length - 1);
};

const goNext = (key: string) => {
  activeNode.value = [...activeNode.value, key];
};

const focusTrigger = (index: number) => {
  unrefElement(triggerRefs.value[index]).focus();
};



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
</script>
<template>
  <div class="border-b border-b-neutral-200 border-b-solid" ref="referenceRef">
    <div class="container mx-auto px-4 py-2 md:hidden">
      <div
          class="flex justify-between items-center flex-wrap md:flex-nowrap px-4 md:px-10 py-2 md:py-5
          w-full h-full border-0 bg-primary-700 border-neutral-200 md:h-20 md:z-10"
      >
        <div class="flex items-center">
          <SfButton
              variant="tertiary"
              square
              aria-label="Close menu"
              class="block md:hidden mr-5 bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
              @click="openMenu([])"
          >
            <SfIconMenu class="text-white" />
          </SfButton>
        </div>
      </div>

      <div v-if="isOpen" class="md:hidden fixed inset-0 bg-neutral-500 bg-opacity-50" />
      <SfDrawer
          ref="drawerRef"
          v-model="isOpen"
          placement="left"
          class="md:hidden right-[50px] max-w-[376px] bg-white overflow-y-auto"
      >
        <nav>
          <div class="flex items-center justify-between p-4 border-b border-b-neutral-200 border-b-solid">
            <p class="typography-text-base font-medium">Browse products</p>
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
          <div
              v-if="bannerNode.value.banner"
              class="flex items-center overflow-hidden bg-neutral-100 border-neutral-300 grow"
          >
            <img
                :src="bannerNode.value.banner"
                :alt="bannerNode.value.bannerTitle"
                class="object-contain w-[50%] basis-6/12"
            />
            <p class="basis-6/12 p-6 font-medium typography-text-base">{{ bannerNode.value.bannerTitle }}</p>
          </div>
        </nav>
      </SfDrawer>

    </div>
  </div>
</template>
