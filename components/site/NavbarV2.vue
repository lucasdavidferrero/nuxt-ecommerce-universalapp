<script setup lang="ts">
import {
  SfIconShoppingCart,
  SfIconFavorite,
  SfIconPerson,
  SfIconClose,
  SfButton,
  SfInput,
  SfIconSearch, SfDropdown,
} from '@storefront-ui/vue';
import { ref } from 'vue';
import {textoPrimerLetraMayusculaRestoMinuscula} from "~/utils/textFormatUtils";
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import type { MenuNode } from "~/components/site/Navbar.types";
import NavbarMenuMobile from "~/components/site/NavbarMenuMobile.vue";
import NavbarMenuDesktop from "~/components/site/NavbarMenuDesktop.vue";
import IconStorefront from '~/assets/icons/storefront1.svg';
const breakpoints = useBreakpoints(breakpointsTailwind)

const inputValue = ref('');

const search = () => {
  alert(`Successfully found 10 results for ${inputValue.value}`);
};
const actionItems = [
  {
    icon: SfIconShoppingCart,
    label: '',
    ariaLabel: 'Cart',
    role: 'button',
  },
  {
    icon: SfIconFavorite,
    label: '',
    ariaLabel: 'Wishlist',
    role: 'button',
  },
  {
    icon: IconStorefront,
    label: '',
    ariaLabel: 'Sucursales',
    role: 'button',
  },
];

const content: MenuNode = {
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
            {
              key: 'TODO_REFRIGERACION',
              codigo: '_00001',
              value: { label: 'Ver todo', counter: 178, link: '#TodorubroRefrigeracion' },
              isLeaf: true,
            }
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
            },
            {
              key: 'TODO_ESTUFA',
              codigo: '_0088',
              value: { label: 'Ver Todo', counter: 178, link: '#TodofamiliaEstufa' },
              isLeaf: true,
            },
          ],
        },
        {
          key: 'TODO_CLIMATIZACION',
          codigo: '_00001',
          value: { label: 'Ver todo', counter: 178, link: '#verTodoClimatizacion' },
          isLeaf: true,
        }
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
function normalizarDescripcionesJerarquia (descripcion: string) {
  return textoPrimerLetraMayusculaRestoMinuscula(descripcion)
}
</script>

<template>
  <div class="w-full h-full max-w-screen-2xl">
    <header ref="referenceRef" class="relative">
      <div
          class="flex justify-between items-center flex-wrap lg:flex-nowrap px-4 lg:px-10 py-2 lg:py-5 w-full h-full border-0 bg-primary-700 border-neutral-200 lg:h-20 lg:z-10"
      >
        <div class="flex items-center">
          <div id="burgerMegaMenuBtnMobileTeleport" class="lg:hidden"></div>
          <a
              href="#"
              aria-label="SF Homepage"
              class="flex shrink-0 w-8 h-8 lg:w-[12.5rem] lg:h-[1.75rem] items-center mr-auto text-white md:mr-10 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
          >
            <picture>
              <source srcset="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/vsf_logo_white.svg" media="(min-width: 1024px)" />
              <img src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/vsf_logo_sign_white.svg" alt="Sf Logo" />
            </picture>
          </a>
        </div>
        <form role="search" class="hidden lg:flex flex-[100%] ml-10" @submit.prevent="search">
          <SfInput
              v-model="inputValue"
              type="search"
              class="[&::-webkit-search-cancel-button]:appearance-none"
              placeholder="Search"
              wrapper-class="flex-1 h-10 pr-0"
              size="base"
          >
            <template #suffix>
              <span class="flex items-center">
                <SfButton
                    variant="tertiary"
                    square
                    aria-label="search"
                    type="submit"
                    class="rounded-l-none hover:bg-transparent active:bg-transparent"
                >
                  <SfIconSearch />
                </SfButton>
              </span>
            </template>
          </SfInput>
        </form>
        <nav class="flex flex-nowrap justify-end items-center lg:ml-10 gap-x-1">
          <SfButton
              v-for="actionItem in actionItems"
              :key="actionItem.ariaLabel"
              :aria-label="actionItem.ariaLabel"
              class="text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
              variant="tertiary"
              square
          >
            <template #prefix>
              <!-- inline-block fill-current w-6 h-6 text-2xl items-center justify-center -->
              <Component :is="actionItem.icon" class="inline-block fill-current w-6 h-6" size="base" :fontControlled="false"/>
            </template>
            <p v-if="actionItem.role === 'login'" class="hidden lg:inline-flex whitespace-nowrap mr-2">
              {{ actionItem.label }}
            </p>
          </SfButton>
        </nav>
        <form role="search" class="flex lg:hidden flex-[100%] my-2" @submit.prevent="search">
          <SfInput
              v-model="inputValue"
              type="search"
              class="[&::-webkit-search-cancel-button]:appearance-none"
              placeholder="Search"
              wrapper-class="flex-1 h-10 pr-0"
              size="base"
          >
            <template #suffix>
              <span class="flex items-center">
                <SfButton
                    variant="tertiary"
                    square
                    aria-label="search"
                    type="submit"
                    class="rounded-l-none hover:bg-transparent active:bg-transparent"
                >
                  <SfIconSearch />
                </SfButton>
              </span>
            </template>
          </SfInput>
        </form>
      </div>
      <!-- Desktop dropdown -->
      <div class="hidden lg:block px-4 lg:px-10 border-b border-b-neutral-200 border-b-solid bg-neutral-100 relative z-50">
        <NavbarMenuDesktop :content="content"></NavbarMenuDesktop>
      </div>

      <!-- Mobile drawer -->
      <NavbarMenuMobile :content="content"></NavbarMenuMobile>
    </header>
  </div>
</template>

<style scoped>

</style>
